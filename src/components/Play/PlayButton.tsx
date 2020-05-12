import { Pause, PlayArrow } from "@material-ui/icons";
import React, { useMemo } from "react";

import { IconButton } from "@material-ui/core";

export interface IPlayButton {
  isPaused: boolean;
  togglePaused: () => void;
}

export default function PlayButton({
  isPaused,
  togglePaused,
}: IPlayButton): JSX.Element {
  const playPauseIcon = useMemo(() => {
    return isPaused ? <PlayArrow /> : <Pause />;
  }, [isPaused]);

  return (
    <IconButton aria-label="Toggle paused" onClick={togglePaused}>
      {playPauseIcon}
    </IconButton>
  );
}
