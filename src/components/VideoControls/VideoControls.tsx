import CurrentTimeLabel from "../CurrentTimeLabel";
import MuteButton from "../MuteButton";
import PlayButton from "../Play";
import PlaybackRate from "../PlaybackRate";
import React from "react";
import Seeker from "../Seeker";
import styles from "./VideoControls.module.css";

export interface IVideoControls {
  duration: number;
  currentTime: number;
  isPaused: boolean;
  togglePaused: () => void;
  isMuted: boolean;
  toggleMuted: () => void;
  updateCurrentTime: (value: number) => void;
  playbackRate: string;
  updatePlaybackRate: (value: string) => void;
}

export default function VideoControls({
  duration,
  currentTime,
  isPaused,
  togglePaused,
  isMuted,
  toggleMuted,
  updateCurrentTime,
  playbackRate,
  updatePlaybackRate,
}: IVideoControls): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Seeker
        currentTime={currentTime}
        duration={duration}
        updateCurrentTime={updateCurrentTime}
      />

      <div className={styles.interactiveWrapper}>
        <div className={styles.interactiveWrapperLeft}>
          <PlayButton isPaused={isPaused} togglePaused={togglePaused} />
          <MuteButton isMuted={isMuted} toggleMuted={toggleMuted} />
          <CurrentTimeLabel currentTime={currentTime} duration={duration} />
        </div>
        <PlaybackRate value={playbackRate} updateValue={updatePlaybackRate} />
      </div>
    </div>
  );
}
