import React, { useCallback, useRef, useState } from "react";

import VideoControls from "../VideoControls";
import styles from "./Video.module.css";

export interface IVideo {
  src?: string;
}

export default function Video({ src }: IVideo): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

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

  const onTimeUpdate = useCallback(() => {
    const time = videoRef.current?.currentTime;
    if (time) {
      setCurrentTime(time);
    }
  }, []);
  //#endregion

  //#region Playback rate
  const [playbackRate, setPlaybackRate] = useState("1.0");

  const onRateChange = useCallback(() => {
    setPlaybackRate(String(videoRef.current?.playbackRate || 1.0));
  }, []);

  const updatePlaybackRate = useCallback((valueStr: string) => {
    const value = parseFloat(valueStr);
    if (isNaN(value)) {
      setPlaybackRate("");
    } else if (videoRef.current) {
      setPlaybackRate(valueStr);
      videoRef.current.playbackRate = value;
    }
  }, []);
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

  return (
    <div>
      <video
        className={styles.video}
        ref={videoRef}
        src={src}
        muted={isMuted}
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        onPause={onPause}
        onPlay={onPlay}
        onRateChange={onRateChange}
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
