import React, { useCallback } from "react";

import { TextField } from "@material-ui/core";

export interface IPlaybackRate {
  value: string;
  updateValue: (value: string) => void;
}

export default function PlaybackRate({
  value,
  updateValue,
}: IPlaybackRate): JSX.Element {
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      updateValue(e.currentTarget.value);
    },
    [updateValue]
  );

  const onBlur = useCallback(() => {
    const rate = parseFloat(value);
    if (isNaN(rate)) {
      updateValue("1.0");
    }
  }, [updateValue, value]);

  return (
    <TextField
      type="number"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputProps={{ step: 0.2 }}
    />
  );
}
