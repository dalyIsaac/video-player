import React, { useCallback } from "react";

import { Slider } from "@material-ui/core";
import ValueLabelComponent from "./ValueLabelComponent";

export interface ISeeker {
  className?: string;
  currentTime: number;
  duration: number;
  updateCurrentTime: (value: number) => void;
}

function getValue(value: number | number[]) {
  if (Array.isArray(value)) {
    return value[0] || 0;
  }
  return value;
}

export default function Seeker({
  className,
  currentTime,
  duration,
  updateCurrentTime,
}: ISeeker): JSX.Element {
  const onRangeChange = useCallback(
    (e: unknown, value: number | number[]) => {
      updateCurrentTime(getValue(value));
    },
    [updateCurrentTime],
  );

  return (
    <Slider
      className={className}
      value={currentTime}
      defaultValue={0}
      max={duration}
      onChange={onRangeChange}
      disabled={duration === 0}
      ValueLabelComponent={ValueLabelComponent}
    />
  );
}
