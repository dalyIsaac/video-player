import React, { useEffect, useState } from "react";
import { Typography, useTheme } from "@material-ui/core";

import { getTime } from "../../utils";

export interface ICurrentTimeLabel {
  currentTime: number;
  duration: number;
}

export default function CurrentTimeLabel({
  currentTime,
  duration,
}: ICurrentTimeLabel): JSX.Element {
  const theme = useTheme();

  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    setTime(getTime(currentTime));
  }, [currentTime]);

  return (
    <Typography style={{ color: theme.palette.text.primary }}>
      {time}/{getTime(duration)}
    </Typography>
  );
}
