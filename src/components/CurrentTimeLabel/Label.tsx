import { Typography, useTheme } from "@material-ui/core";

import React from "react";

export interface ILabel {
  children: string | string[];
}

export default function Label({ children }: ILabel): JSX.Element {
  const theme = useTheme();

  return (
    <Typography style={{ color: theme.palette.text.primary, padding: 8 }}>
      {children}
    </Typography>
  );
}
