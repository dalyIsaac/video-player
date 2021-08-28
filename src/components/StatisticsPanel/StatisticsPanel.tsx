import {
  Card,
  CardContent,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  makeStyles,
} from "@material-ui/core";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  StatisticsPosition,
  StatisticsVisible,
  ToggleStatisticsVisible,
  UpdateStatisticsPosition,
} from "../Video/useStatistics";
import { getEpochTimeString, getTime } from "../../utils";

import { Close } from "@material-ui/icons";
import Draggable from "react-draggable";
import useWindowSize from "../../useWindowSize";

export interface IStatisticsPanel {
  time: string;
  duration: string;
  playbackRate: string;
  now: number;
  remainingTime: string;
  remainingAtRate: string;
  watchStartTime: number;
}

const useStyles = makeStyles({
  closeButton: {
    float: "right",
  },
  root: {
    left: 0,
    position: "absolute",
    top: 0,
    width: 250,
  },
});

export default function StatisticsPanel({
  time,
  duration,
  playbackRate,
  now,
  remainingTime,
  remainingAtRate,
  watchStartTime,
}: IStatisticsPanel): JSX.Element {
  const styles = useStyles();
  const nodeRef = useRef<HTMLSpanElement | null>(null);

  const isVisible = useContext(StatisticsVisible);
  const toggleIsVisible = useContext(ToggleStatisticsVisible);
  const position = useContext(StatisticsPosition);
  const updatePosition = useContext(UpdateStatisticsPosition);

  const windowSize = useWindowSize();
  const [zIndex, setZIndex] = useState(-1);

  useEffect(() => {
    if (isVisible) {
      setZIndex(100);
    } else {
      setZIndex(-1);
    }
  }, [isVisible, position, zIndex]);

  // Check if the panel needs to move when the window size changes
  useEffect(() => {
    updatePosition();
  }, [updatePosition, windowSize]);

  const watchingFor = useMemo(() => {
    let time = 0;
    if (watchStartTime !== 0) {
      time = (now - watchStartTime) / 1000;
    }
    return getTime(time);
  }, [now, watchStartTime]);

  const onStop = useCallback(() => {
    if (nodeRef.current) {
      const { top, left } = nodeRef.current.getBoundingClientRect();
      updatePosition(left, top);
    }
  }, [updatePosition]);

  return (
    <Draggable
      nodeRef={nodeRef}
      bounds="body"
      onStop={onStop}
      position={position}
    >
      <span
        ref={nodeRef}
        className={styles.root}
        style={{
          zIndex,
        }}
      >
        <Card style={{ opacity: 0.8 }}>
          <CardContent style={{ padding: 0 }}>
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
                  <TableCell>Watching for</TableCell>
                  <TableCell>{watchingFor}</TableCell>
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
                  <TableCell>
                    {watchStartTime === 0
                      ? "N/A"
                      : getEpochTimeString(watchStartTime)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </span>
    </Draggable>
  );
}
