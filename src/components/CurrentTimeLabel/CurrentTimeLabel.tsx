import { Divider, Grid } from "@material-ui/core";
import React, { useEffect, useMemo, useState } from "react";
import { getEpochTimeString, getTime } from "../../utils";
import Label from "../Label";

export interface ICurrentTimeLabel {
  currentTime: number;
  duration: number;
  playbackRate: string;
  watchStartTime: number;
}

export default function CurrentTimeLabel({
  currentTime,
  duration,
  playbackRate,
  watchStartTime,
}: ICurrentTimeLabel): JSX.Element {
  // const watchingItems = useMemo(() => {
  //   if (watchStartTime) {
  //     let diff = (now - watchStartTime) / 1000;
  //     if (diff < 0) {
  //       diff = 0;
  //     }

  //     return (
  //       <React.Fragment>
  //         <Divider orientation="vertical" flexItem />
  //         <Label>Started {getEpochTimeString(watchStartTime)}</Label>
  //         <Divider orientation="vertical" flexItem />
  //         <Label>Watching for {getTime(diff)}</Label>
  //       </React.Fragment>
  //     );
  //   } else {
  //     return null;
  //   }
  // }, [now, watchStartTime]);

  return (
    <Grid container alignItems="center">
      <Divider orientation="vertical" flexItem />
      {/* 
      <Divider orientation="vertical" flexItem />
      <Label>-{remainingTime}</Label>
      <Divider orientation="vertical" flexItem />
      <Label>
        -{remainingAtRate} @ ×{playbackRate}
      </Label>
      {watchingItems} */}
    </Grid>
  );
}
