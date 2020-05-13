import { Typography, makeStyles, useTheme } from "@material-ui/core";

import React from "react";

export interface IVideoTitle {
  children?: string;
}

const useStyles = makeStyles({
  root: {
    padding: "16px",
  },
});

// NOTE: this is hard coded according to Typography
export const VIDEO_TITLE_HEIGHT = "64px";

export default function VideoTitle({ children }: IVideoTitle): JSX.Element {
  const theme = useTheme();
  const styles = useStyles();

  return (
    <Typography
      variant="h6"
      style={{ color: theme.palette.text.primary }}
      className={styles.root}
    >
      {children || "Open a video file (Ctrl + O)"}
    </Typography>
  );
}
