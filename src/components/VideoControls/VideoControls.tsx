import CurrentTimeLabel from "../CurrentTimeLabel";
import MuteButton from "../MuteButton";
import PlayButton from "../Play";
import PlaybackRate from "../PlaybackRate";
import React from "react";
import Seeker from "../Seeker";
import { makeStyles } from "@material-ui/core";

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

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
  },
  interactiveRoot: {
    display: "flex",
    justifyContent: "space-between",
  },
  interactiveRootLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

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
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Seeker
        currentTime={currentTime}
        duration={duration}
        updateCurrentTime={updateCurrentTime}
      />

      <div className={styles.interactiveRoot}>
        <div className={styles.interactiveRootLeft}>
          <PlayButton isPaused={isPaused} togglePaused={togglePaused} />
          <MuteButton isMuted={isMuted} toggleMuted={toggleMuted} />
          <CurrentTimeLabel currentTime={currentTime} duration={duration} />
        </div>
        <PlaybackRate value={playbackRate} updateValue={updatePlaybackRate} />
      </div>
    </div>
  );
}
