import React, { useCallback } from "react";
import { TextField, makeStyles } from "@material-ui/core";

import { PLAYBACKRATE_STEP } from "./utils";

export interface IPlaybackRate {
  value: string;
  updateValue: (value: string) => void;
}

const useStyles = makeStyles({
  root: {
    padding: 16,
  },
});

export default function PlaybackRate({
  value,
  updateValue,
}: IPlaybackRate): JSX.Element {
  const styles = useStyles();

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
      className={styles.root}
      aria-label="Video playback rate"
      type="number"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputProps={{
        step: PLAYBACKRATE_STEP,
        "aria-label": "Video playback rate",
      }}
    />
  );
}
