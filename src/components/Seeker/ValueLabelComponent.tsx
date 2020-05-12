import React from "react";
import { Tooltip } from "@material-ui/core";
import { getTime } from "../../utils";

export interface IValueLabelComponentProps {
  children: React.ReactElement;
  open: boolean;
  value: number;
}

export default function ValueLabelComponent({
  children,
  open,
  value,
}: IValueLabelComponentProps): JSX.Element {
  const time = getTime(value);
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={time}>
      {children}
    </Tooltip>
  );
}
