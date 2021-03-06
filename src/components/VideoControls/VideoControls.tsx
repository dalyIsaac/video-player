import React, { useContext, useEffect, useState } from "react";
import {
  StatisticsVisible,
  ToggleStatisticsVisible,
} from "../Video/useStatistics";

import Label from "../Label";
import MuteButton from "../MuteButton";
import PlayButton from "../Play";
import PlaybackRate from "../PlaybackRate";
import Seeker from "../Seeker";
import StatisticsButton from "../StatisticsButton";
import StatisticsPanel from "../StatisticsPanel";
import { getTime } from "../../utils";
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

const height = 90;
const padding = 16;
export const VIDEO_CONTROLS_HEIGHT = `${padding * 2 + height}px`;

const useStyles = makeStyles({
  interactiveRoot: {
    display: "flex",
    justifyContent: "space-between",
  },
  interactiveRootLeft: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  root: {
    alignContent: "center",
    display: "flex",
    flexDirection: "column",
    height,
    padding,
  },
  seeker: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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

  const isStatsVisible = useContext(StatisticsVisible);
  const toggleIsStatsVisible = useContext(ToggleStatisticsVisible);

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
          <StatisticsButton
            isVisible={isStatsVisible}
            toggleIsVisible={toggleIsStatsVisible}
          />
        </div>
        <PlaybackRate value={playbackRate} updateValue={updatePlaybackRate} />
      </div>
      <StatisticsPanel
        time={time}
        duration={getTime(duration)}
        playbackRate={playbackRate}
        now={now}
        remainingTime={remainingTime}
        remainingAtRate={remainingAtRate}
        watchStartTime={watchStartTime}
      />
    </div>
  );
}
