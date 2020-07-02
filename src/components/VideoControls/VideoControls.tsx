import MuteButton from "../MuteButton";
import PlayButton from "../Play";
import PlaybackRate from "../PlaybackRate";
import React, { useState, useEffect } from "react";
import Seeker from "../Seeker";
import { makeStyles } from "@material-ui/core";
import { getTime } from "../../utils";
import Label from "../Label";
import StatisticsPanel from "../StatisticsPanel";

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

const height = 90;
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
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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

  const [time, setTime] = useState("00:00:00");
  const [now, setNow] = useState(0);
  const [remainingTime, setRemainingTime] = useState("00:00:00");
  const [remainingAtRate, setRemainingAtRate] = useState("00:00:00");

  useEffect(() => {
    setTime(getTime(currentTime));

    const remaining = duration - currentTime;
    setRemainingTime(getTime(remaining));

    const rate = parseFloat(playbackRate) || 1;
    setRemainingAtRate(getTime(remaining / rate));
  }, [currentTime, duration, playbackRate, watchStartTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [watchStartTime]);

  return (
    <div className={styles.root}>
      <StatisticsPanel
        time={time}
        duration={getTime(duration)}
        playbackRate={playbackRate}
        now={now}
        remainingTime={remainingTime}
        remainingAtRate={remainingAtRate}
        watchStartTime={watchStartTime}
      />
      <div className={styles.seeker}>
        <Label>{time}</Label>
        <Seeker
          currentTime={currentTime}
          duration={duration}
          updateCurrentTime={updateCurrentTime}
        />
        <Label>
          -{remainingTime}/{getTime(duration)}
        </Label>
      </div>

      <div className={styles.interactiveRoot}>
        <div className={styles.interactiveRootLeft}>
          <PlayButton isPaused={isPaused} togglePaused={togglePaused} />
          <MuteButton isMuted={isMuted} toggleMuted={toggleMuted} />
          {/* <CurrentTimeLabel
            currentTime={currentTime}
            duration={duration}
            playbackRate={playbackRate}
            watchStartTime={watchStartTime}
          /> */}
        </div>
        <PlaybackRate value={playbackRate} updateValue={updatePlaybackRate} />
      </div>
    </div>
  );
}
