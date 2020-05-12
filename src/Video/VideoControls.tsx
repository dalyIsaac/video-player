import { RangeInput, RangeInputProps } from "grommet";
import React, { useCallback, useState } from "react";

import styles from "./VideoControls.module.css";

export interface IVideoControls {
  length: number;
  currentTime: number;
  updateCurrentTime: (value: number) => void;
}

export default function VideoControls({
  length,
  currentTime,
  updateCurrentTime,
}: IVideoControls): JSX.Element {
  const onRangeChange = useCallback(
    (e: React.ChangeEvent<Element>) => {
      updateCurrentTime(Number((e.target as HTMLInputElement).value));
    },
    [updateCurrentTime]
  );

  return (
    <div className={styles.wrapper}>
      <RangeInput
        value={currentTime}
        max={length}
        onChange={onRangeChange}
        disabled={length === 0}
      />
    </div>
  );
}
