import {
  KeyboardShortcut,
  WheelShortcuts,
  handleKeyboardShortcuts,
  handleWheelShortcuts,
} from "./handleVideoShortcuts";
import { PLAYBACKRATE_MAX, roundPlaybackRate } from "../PlaybackRate/utils";
import { PLAYBACKRATE_MIN, PLAYBACKRATE_STEP } from "../PlaybackRate";
import React, { useCallback, useRef, useState } from "react";

import VideoControls from "../VideoControls";
import VideoTitle from "../VideoTitle";
import { makeStyles } from "@material-ui/core";
import useEventListener from "@use-it/event-listener";
import { useHotkeys } from "react-hotkeys-hook";

const TRAVEL_DISTANCE = 10;

export interface IVideo {
  src?: string;
  selectSrc: () => void;
  title?: string;
}

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
  },
  video: {
    width: "100vw",
  },
});

export default function Video({ src, selectSrc, title }: IVideo): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const styles = useStyles();

  //#region Play/pause
  const [isPaused, setIsPaused] = useState(true);
  const togglePaused = useCallback(() => {
    if (isPaused) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
    setIsPaused(!isPaused);
  }, [isPaused]);

  const onPause = useCallback(() => {
    setIsPaused(true);
  }, []);

  const onPlay = useCallback(() => {
    setIsPaused(false);
  }, []);
  //#endregion

  //#region Mute
  const [isMuted, setIsMuted] = useState(false);
  const toggleMuted = useCallback(() => {
    setIsMuted(!isMuted);
  }, [isMuted]);
  useHotkeys("m", toggleMuted);
  //#endregion

  //#region currentTime and duration
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const manualUpdateCurrentTime = useCallback((value: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value;
    }
    setCurrentTime(value);
  }, []);

  const addToCurrentTime = useCallback(
    (delta: number) => {
      if (videoRef.current) {
        let value = videoRef.current.currentTime + delta;
        if (value < 0) {
          value = 0;
        } else if (value > duration) {
          value = duration;
        }

        manualUpdateCurrentTime(value);
      }
    },
    [duration, manualUpdateCurrentTime]
  );

  const leftArrow = useCallback(() => {
    addToCurrentTime(-TRAVEL_DISTANCE);
  }, [addToCurrentTime]);

  const rightArrow = useCallback(() => {
    addToCurrentTime(TRAVEL_DISTANCE);
  }, [addToCurrentTime]);

  const onTimeUpdate = useCallback(() => {
    const time = videoRef.current?.currentTime;
    if (time) {
      setCurrentTime(time);
    }
  }, []);
  //#endregion

  //#region Playback rate
  const [playbackRate, setPlaybackRate] = useState("1.0");

  const updatePlaybackRate = useCallback((valueStr: string) => {
    let value = parseFloat(valueStr);
    if (isNaN(value)) {
      setPlaybackRate("");
    } else if (videoRef.current) {
      if (value < PLAYBACKRATE_MIN) {
        value = PLAYBACKRATE_MIN;
      } else if (value > PLAYBACKRATE_MAX) {
        value = PLAYBACKRATE_MAX;
      }
      valueStr = roundPlaybackRate(value);
      setPlaybackRate(valueStr);
      videoRef.current.playbackRate = value;
    }
  }, []);

  const addToPlaybackRate = useCallback(
    (delta: number) => {
      if (videoRef.current) {
        updatePlaybackRate(String(videoRef.current.playbackRate + delta));
      }
    },
    [updatePlaybackRate]
  );

  const upArrow = useCallback(() => {
    addToPlaybackRate(PLAYBACKRATE_STEP);
  }, [addToPlaybackRate]);

  const downArrow = useCallback(() => {
    addToPlaybackRate(-PLAYBACKRATE_STEP);
  }, [addToPlaybackRate]);
  //#endregion

  const onLoadedMetadata = useCallback(() => {
    const video = videoRef.current;
    setDuration(video?.duration || 0);

    // Play
    setIsPaused(false);
    video?.play();

    // Playback rate
    const rate = parseFloat(playbackRate);
    if (!isNaN(rate) && video) {
      video.playbackRate = rate;
    }
  }, [playbackRate]);

  //#region Keyboard shortcuts
  const keyboardShortcuts: KeyboardShortcut[] = [
    { key: "m", onKeyDown: toggleMuted },
    { key: " ", onKeyDown: togglePaused },
    { key: "o", ctrlKey: true, onKeyDown: selectSrc },
    { key: "ArrowLeft", onKeyDown: leftArrow },
    { key: "ArrowRight", onKeyDown: rightArrow },
    { key: "ArrowUp", onKeyDown: upArrow },
    { key: "ArrowDown", onKeyDown: downArrow },
  ];

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      handleKeyboardShortcuts(e, keyboardShortcuts);
    },
    [keyboardShortcuts]
  );

  useEventListener("keydown", onKeyDown);
  //#endregion

  //#region Wheel shortcuts
  const xWheel = useCallback(
    (val: number) => {
      addToCurrentTime(TRAVEL_DISTANCE * (val / 1000));
    },
    [addToCurrentTime]
  );

  const yWheel = useCallback(
    (val: number) => {
      addToPlaybackRate(PLAYBACKRATE_STEP * -(val / 100));
    },
    [addToPlaybackRate]
  );

  const wheelShortcuts: WheelShortcuts = {
    x: xWheel,
    y: yWheel,
  };

  const onWheel = useCallback(
    (e: React.WheelEvent) => {
      handleWheelShortcuts(e, wheelShortcuts);
    },
    [wheelShortcuts]
  );

  useEventListener("wheel", onWheel);
  //#endregion

  return (
    <div className={styles.root}>
      <VideoTitle>{title}</VideoTitle>
      <video
        className={styles.video}
        ref={videoRef}
        src={src}
        muted={isMuted}
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        onPause={onPause}
        onPlay={onPlay}
      />
      <VideoControls
        isPaused={isPaused}
        togglePaused={togglePaused}
        isMuted={isMuted}
        toggleMuted={toggleMuted}
        duration={duration}
        currentTime={currentTime}
        updateCurrentTime={manualUpdateCurrentTime}
        playbackRate={playbackRate}
        updatePlaybackRate={updatePlaybackRate}
      />
    </div>
  );
}
