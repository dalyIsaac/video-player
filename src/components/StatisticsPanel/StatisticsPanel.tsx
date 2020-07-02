import React, { useRef, useMemo } from "react";
import Draggable from "react-draggable";
import {
  makeStyles,
  Card,
  CardContent,
  Table,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@material-ui/core";
import { getTime, getEpochTimeString } from "../../utils";
import { Close } from "@material-ui/icons";

export interface IStatisticsPanel {
  time: string;
  duration: string;
  playbackRate: string;
  now: number;
  remainingTime: string;
  remainingAtRate: string;
  isVisible: boolean;
  toggleIsVisible: () => void;
  watchStartTime: number;
}

const useStyles = makeStyles({
  root: {
    position: "absolute",
    left: 300,
    top: 300,
    width: 400,
  },
  closeButton: {
    float: "right",
  },
});

export default function StatisticsPanel({
  isVisible,
  toggleIsVisible,
  time,
  duration,
  playbackRate,
  now,
  remainingTime,
  remainingAtRate,
  watchStartTime,
}: IStatisticsPanel): JSX.Element {
  const styles = useStyles();
  const nodeRef = useRef(null);

  const zIndex = useMemo(() => {
    if (isVisible) {
      return 100;
    }
    return -1;
  }, [isVisible]);

  const watchingFor = useMemo(() => {
    return getTime((now - watchStartTime) / 1000);
  }, [now, watchStartTime]);

  return (
    <Draggable nodeRef={nodeRef} bounds="body">
      <span ref={nodeRef} className={styles.root} style={{ zIndex }}>
        <Card>
          <CardContent>
            <IconButton
              aria-label="Close statistics panel"
              className={styles.closeButton}
              onClick={toggleIsVisible}
            >
              <Close />
            </IconButton>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell>Current time</TableCell>
                  <TableCell>{time}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Duration</TableCell>
                  <TableCell>{duration}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Playback rate</TableCell>
                  <TableCell>{playbackRate}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Remaining time</TableCell>
                  <TableCell>{remainingTime}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Remaining at ×{playbackRate}</TableCell>
                  <TableCell>{remainingAtRate}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Watch start time</TableCell>
                  <TableCell>{getEpochTimeString(watchStartTime)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Watching for</TableCell>
                  <TableCell>{watchingFor}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </span>
    </Draggable>
  );
}
