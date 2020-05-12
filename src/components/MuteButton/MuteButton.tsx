import React, { useMemo } from "react";
import { VolumeMute, VolumeUp } from "@material-ui/icons";

import { IconButton } from "@material-ui/core";

export interface IPlayButton {
  isMuted: boolean;
  toggleMuted: () => void;
}

export default function MuteButton({
  isMuted,
  toggleMuted,
}: IPlayButton): JSX.Element {
  const audibleIcon = useMemo(() => {
    return isMuted ? <VolumeMute /> : <VolumeUp />;
  }, [isMuted]);

  return <IconButton onClick={toggleMuted}>{audibleIcon}</IconButton>;
}
