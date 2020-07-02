import React, { useMemo } from "react";
import { CancelPresentation, PresentToAll } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

export interface IStatisticsButton {
  isVisible: boolean;
  toggleIsVisible: () => void;
}

export default function StatisticsButton({
  isVisible,
  toggleIsVisible,
}: IStatisticsButton): JSX.Element {
  const icon = useMemo(() => {
    return isVisible ? <CancelPresentation /> : <PresentToAll />;
  }, [isVisible]);

  return (
    <IconButton aria-label="Toggle statistics" onClick={toggleIsVisible}>
      {icon}
    </IconButton>
  );
}
