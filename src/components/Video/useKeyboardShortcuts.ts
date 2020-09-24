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
  updatePlaybackRate: (rate: string) => void;
  selectSrc: () => void;
  toggleMuted: () => void;
  togglePaused: () => void;
  toggleIsStatsVisible: () => void;
}

type OnKeyDownEvent = (e: KeyboardEvent) => void;

export default function useKeyboardShortcuts({
  addToCurrentTime,
  addToPlaybackRate,
  updatePlaybackRate,
  selectSrc,
  toggleMuted,
  togglePaused,
  toggleIsStatsVisible: toggleStatistics,
}: IUseKeyboardShortcuts): OnKeyDownEvent {
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const leftArrow = () => addToCurrentTime(-TRAVEL_DISTANCE);
      const rightArrow = () => addToCurrentTime(TRAVEL_DISTANCE);
      const upArrow = () => addToPlaybackRate(PLAYBACKRATE_STEP);
      const downArrow = () => addToPlaybackRate(-PLAYBACKRATE_STEP);
      const gotoSpeed1 = () => updatePlaybackRate("1");
      const gotoSpeed2 = () => updatePlaybackRate("2");
      const gotoSpeed3 = () => updatePlaybackRate("3");

      const keyboardShortcuts: KeyboardShortcut[] = [
        { key: "m", onKeyDown: toggleMuted },
        { key: " ", onKeyDown: togglePaused },
        { ctrlKey: true, key: "o", onKeyDown: selectSrc },
        { key: "s", onKeyDown: toggleStatistics },
        { key: "ArrowLeft", onKeyDown: leftArrow },
        { key: "ArrowRight", onKeyDown: rightArrow },
        { key: "ArrowUp", onKeyDown: upArrow },
        { key: "ArrowDown", onKeyDown: downArrow },
        { key: "1", onKeyDown: gotoSpeed1 },
        { key: "2", onKeyDown: gotoSpeed2 },
        { key: "3", onKeyDown: gotoSpeed3 },
      ];

      handleKeyboardShortcuts(e, keyboardShortcuts);
    },
    [
      addToCurrentTime,
      addToPlaybackRate,
      selectSrc,
      toggleMuted,
      togglePaused,
      toggleStatistics,
      updatePlaybackRate,
    ],
  );

  return onKeyDown;
}
