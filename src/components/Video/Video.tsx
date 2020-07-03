import React, { useCallback, useRef, useState } from "react";
import { STATS_PANEL_HEIGHT, STATS_PANEL_WIDTH } from "../StatisticsPanel";
import useStatistics, {
  StatisticsPosition,
  StatisticsVisible,
  ToggleStatisticsVisible,
  UpdateStatisticsPosition,
} from "./useStatistics";

import { VIDEO_CONTROLS_HEIGHT } from "../VideoControls/VideoControls";
import { VIDEO_TITLE_HEIGHT } from "../VideoTitle/VideoTitle";
import VideoControls from "../VideoControls";
import VideoTitle from "../VideoTitle";
import { makeStyles } from "@material-ui/core";
import useCurrentTime from "./useCurrentTime";
import useEventListener from "react-use-event-listener";
import useKeyboardShortcuts from "./useKeyboardShortcuts";
import useMute from "./useMute";
import usePause from "./usePause";
import usePlaybackRate from "./usePlaybackRate";
import useWheelShortcuts from "./useWheelShortcuts";

export interface IVideo {
  src?: string;
  selectSrc: () => void;
  title?: string;
}

const useStyles = makeStyles({
  root: {
    // width: "100vw",
    height: "100vh",
  },
  video: {
    height:
      `calc(100vh - ${VIDEO_TITLE_HEIGHT} ` +
      `- ${VIDEO_CONTROLS_HEIGHT} - 10px)`,
    width: "100vw",
  },
});

export default function Video({ src, selectSrc, title }: IVideo): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const styles = useStyles();

  const [watchStartTime, setWatchStartTime] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [duration, setDuration] = useState(0);

  const { isPaused, setIsPaused, togglePaused, onPause, onPlay } = usePause(
    videoRef.current,
    isVideoLoaded
  );

  const { isMuted, toggleMuted } = useMute(videoRef.current);

  const {
    currentTime,
    onTimeUpdate,
    updateCurrentTime,
    addToCurrentTime,
  } = useCurrentTime(videoRef.current, duration);

  const {
    playbackRate,
    updatePlaybackRate,
    addToPlaybackRate,
  } = usePlaybackRate(videoRef.current);

  const {
    isStatsVisible,
    toggleIsStatsVisible,
    position: statsPosition,
    updatePosition: updateStatsPosition,
  } = useStatistics(STATS_PANEL_HEIGHT, STATS_PANEL_WIDTH);

  // Keyboard shortcuts
  const onKeyDown = useKeyboardShortcuts({
    addToCurrentTime,
    addToPlaybackRate,
    selectSrc,
    toggleMuted,
    togglePaused,
    toggleIsStatsVisible,
  });
  useEventListener("keydown", onKeyDown, document);

  // Wheel shortcuts
  const onWheel = useWheelShortcuts({ addToCurrentTime, addToPlaybackRate });
  useEventListener("wheel", onWheel, document, { passive: true });

  // On loaded
  const onLoadedMetadata = useCallback(() => {
    const video = videoRef.current;
    setIsVideoLoaded(true);
    setDuration(video?.duration || 0);
    setWatchStartTime(Date.now());

    // Play
    setIsPaused(false);
    video?.play();

    // Playback rate
    const rate = parseFloat(playbackRate);
    if (!isNaN(rate) && video) {
      video.playbackRate = rate;
    }
  }, [playbackRate, setIsPaused]);

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
      <StatisticsVisible.Provider value={isStatsVisible}>
        <ToggleStatisticsVisible.Provider value={toggleIsStatsVisible}>
          <StatisticsPosition.Provider value={statsPosition}>
            <UpdateStatisticsPosition.Provider value={updateStatsPosition}>
              <VideoControls
                isPaused={isPaused}
                togglePaused={togglePaused}
                isMuted={isMuted}
                toggleMuted={toggleMuted}
                duration={duration}
                currentTime={currentTime}
                updateCurrentTime={updateCurrentTime}
                playbackRate={playbackRate}
                updatePlaybackRate={updatePlaybackRate}
                watchStartTime={watchStartTime}
              />
            </UpdateStatisticsPosition.Provider>
          </StatisticsPosition.Provider>
        </ToggleStatisticsVisible.Provider>
      </StatisticsVisible.Provider>
    </div>
  );
}
