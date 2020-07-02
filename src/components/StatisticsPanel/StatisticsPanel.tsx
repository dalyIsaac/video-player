import React, {
  useRef,
  useMemo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Draggable, { DraggableEvent } from "react-draggable";
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
import {
  StatisticsVisible,
  ToggleStatisticsVisible,
  StatisticsPosition,
  UpdateStatisticsPosition,
} from "../Video/useStatistics";

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
  root: {
    position: "absolute",
    width: 400,
  },
  closeButton: {
    float: "right",
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

  const [renderedPosition] = useState({ ...position });
  const [zIndex, setZIndex] = useState(-1);

  useEffect(() => {
    if (isVisible) {
      setZIndex(100);
    } else {
      setZIndex(-1);
    }
  }, [isVisible, position, zIndex]);

  const watchingFor = useMemo(() => {
    return getTime((now - watchStartTime) / 1000);
  }, [now, watchStartTime]);

  const onStop = useCallback(
    (e: DraggableEvent) => {
      if (nodeRef.current) {
        const { top, left } = nodeRef.current.getBoundingClientRect();
        updatePosition(top, left);
      }
    },
    [updatePosition]
  );

  return (
    <Draggable nodeRef={nodeRef} bounds="body" onStop={onStop}>
      <span
        ref={nodeRef}
        className={styles.root}
        style={{ zIndex, ...renderedPosition }}
      >
        <Card style={{ opacity: 0.8 }}>
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
