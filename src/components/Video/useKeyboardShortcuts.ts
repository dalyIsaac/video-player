import {
  KeyboardShortcut,
  handleKeyboardShortcuts,
} from "./handleVideoShortcuts";

import { PLAYBACKRATE_STEP } from "../PlaybackRate";
import { TRAVEL_DISTANCE } from "./utils";
import { useCallback } from "react";

export interface IUseKeyboardShortcuts {
  addToCurrentTime: (delta: number) => void;
  addToPlaybackRate: (delta: number) => void;
  selectSrc: () => void;
  toggleMuted: () => void;
  togglePaused: () => void;
  toggleIsStatsVisible: () => void;
}

type OnKeyDownEvent = (e: KeyboardEvent) => void;

export default function useKeyboardShortcuts({
  addToCurrentTime,
  addToPlaybackRate,
  selectSrc,
  toggleMuted,
  togglePaused,
  toggleIsStatsVisible: toggleStatistics,
}: IUseKeyboardShortcuts): OnKeyDownEvent {
  const leftArrow = () => addToCurrentTime(-TRAVEL_DISTANCE);

  const rightArrow = () => addToCurrentTime(TRAVEL_DISTANCE);

  const upArrow = () => addToPlaybackRate(PLAYBACKRATE_STEP);

  const downArrow = () => addToPlaybackRate(-PLAYBACKRATE_STEP);

  const keyboardShortcuts: KeyboardShortcut[] = [
    { key: "m", onKeyDown: toggleMuted },
    { key: " ", onKeyDown: togglePaused },
    { ctrlKey: true, key: "o", onKeyDown: selectSrc },
    { key: "s", onKeyDown: toggleStatistics },
    { key: "ArrowLeft", onKeyDown: leftArrow },
    { key: "ArrowRight", onKeyDown: rightArrow },
    { key: "ArrowUp", onKeyDown: upArrow },
    { key: "ArrowDown", onKeyDown: downArrow },
  ];

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      handleKeyboardShortcuts(e, keyboardShortcuts);
    },
    [keyboardShortcuts],
  );

  return onKeyDown;
}
