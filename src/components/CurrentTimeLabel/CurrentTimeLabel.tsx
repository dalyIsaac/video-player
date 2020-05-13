import { Divider, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import Label from "./Label";
import { getTime } from "../../utils";

export interface ICurrentTimeLabel {
  currentTime: number;
  duration: number;
  playbackRate: string;
}

export default function CurrentTimeLabel({
  currentTime,
  duration,
  playbackRate,
}: ICurrentTimeLabel): JSX.Element {
  const [time, setTime] = useState("00:00:00");
  const [remainingTime, setRemainingTime] = useState("00:00:00");
  const [remainingAtRate, setRemainingAtRate] = useState("00:00:00");

  useEffect(() => {
    setTime(getTime(currentTime));

    const remaining = duration - currentTime;
    setRemainingTime(getTime(remaining));

    const rate = parseFloat(playbackRate) || 1;
    setRemainingAtRate(getTime(remaining / rate));
  }, [currentTime, duration, playbackRate]);

  return (
    <Grid container alignItems="center">
      <Divider orientation="vertical" flexItem />
      <Label>
        {time}/{getTime(duration)}
      </Label>
      <Divider orientation="vertical" flexItem />
      <Label>{remainingTime} remaining</Label>
      <Divider orientation="vertical" flexItem />
      <Label>
        {remainingAtRate} remaining at ×{playbackRate}
      </Label>
    </Grid>
  );
}
