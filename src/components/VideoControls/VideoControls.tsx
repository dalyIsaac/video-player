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
  watchStartTime: number;
}

const height = 76;
const padding = 16;
export const VIDEO_CONTROLS_HEIGHT = `${padding * 2 + height}px`;

const useStyles = makeStyles({
  root: {
    height,
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
    padding,
  },
  seeker: {
    width: `calc(100vw - ${padding * 2}px - 10px)`,
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
  watchStartTime,
}: IVideoControls): JSX.Element {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Seeker
        className={styles.seeker}
        currentTime={currentTime}
        duration={duration}
        updateCurrentTime={updateCurrentTime}
      />

      <div className={styles.interactiveRoot}>
        <div className={styles.interactiveRootLeft}>
          <PlayButton isPaused={isPaused} togglePaused={togglePaused} />
          <MuteButton isMuted={isMuted} toggleMuted={toggleMuted} />
          <CurrentTimeLabel
            currentTime={currentTime}
            duration={duration}
            playbackRate={playbackRate}
            watchStartTime={watchStartTime}
          />
        </div>
        <PlaybackRate value={playbackRate} updateValue={updatePlaybackRate} />
      </div>
    </div>
  );
}