import CurrentTimeLabel from "../CurrentTimeLabel";
import PlayButton from "../Play";
import React from "react";
import Seeker from "../Seeker";
import styles from "./VideoControls.module.css";

export interface IVideoControls {
  duration: number;
  currentTime: number;
  isPaused: boolean;
  togglePaused: () => void;
  updateCurrentTime: (value: number) => void;
}

export default function VideoControls({
  duration,
  currentTime,
  isPaused,
  togglePaused,
  updateCurrentTime,
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
          <CurrentTimeLabel currentTime={currentTime} duration={duration} />
        </div>
      </div>
    </div>
  );
}
