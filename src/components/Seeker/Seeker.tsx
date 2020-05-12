import React, { useCallback } from "react";

import { Slider } from "@material-ui/core";
import ValueLabelComponent from "./ValueLabelComponent";

export interface ISeeker {
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
  currentTime,
  duration,
  updateCurrentTime,
}: ISeeker): JSX.Element {
  const onRangeChange = useCallback(
    (e: any, value: number | number[]) => {
      updateCurrentTime(getValue(value));
    },
    [updateCurrentTime]
  );

  return (
    <Slider
      value={currentTime}
      defaultValue={0}
      max={duration}
      onChange={onRangeChange}
      disabled={duration === 0}
      ValueLabelComponent={ValueLabelComponent}
    />
  );
}
