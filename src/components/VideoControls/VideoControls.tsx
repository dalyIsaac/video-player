import { IconButton, Slider, Tooltip, Typography } from "@material-ui/core";
import { Pause, PlayArrow } from "@material-ui/icons";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import styles from "./VideoControls.module.css";

export interface IVideoControls {
  length: number;
  currentTime: number;
  isPaused: boolean;
  togglePaused: () => void;
  updateCurrentTime: (value: number) => void;
}

interface IValueLabelComponentProps {
  children: React.ReactElement;
  open: boolean;
  value: number;
}

function getTime(value: number) {
  return new Date(value * 1000).toISOString().substr(11, 8);
}

function ValueLabelComponent({
  children,
  open,
  value,
}: IValueLabelComponentProps): JSX.Element {
  const time = getTime(value);
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={time}>
      {children}
    </Tooltip>
  );
}

export default function VideoControls({
  length,
  currentTime,
  isPaused,
  togglePaused,
  updateCurrentTime,
}: IVideoControls): JSX.Element {
  const playPauseIcon = useMemo(() => {
    return isPaused ? <PlayArrow /> : <Pause />;
  }, [isPaused]);

  const [timeStr, setTime] = useState("00:00:00");

  useEffect(() => {
    setTime(getTime(currentTime));
  }, [currentTime]);

  const onRangeChange = useCallback(
    (e: any, value: number | number[]) => {
      updateCurrentTime(Array.isArray(value) ? value[0] : value);
    },
    [updateCurrentTime]
  );

  return (
    <div className={styles.wrapper}>
      <Slider
        value={currentTime}
        defaultValue={0}
        max={length}
        onChange={onRangeChange}
        disabled={length === 0}
        ValueLabelComponent={ValueLabelComponent}
      />
      <div className={styles.interactiveWrapper}>
        <div className={styles.interactiveWrapperLeft}>
          <IconButton onClick={togglePaused}>{playPauseIcon}</IconButton>
          <Typography>
            {timeStr}/{getTime(length)}
          </Typography>
        </div>
      </div>
    </div>
  );
}
