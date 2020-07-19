import { WheelShortcuts, handleWheelShortcuts } from "./handleVideoShortcuts";

import { PLAYBACKRATE_STEP } from "../PlaybackRate";
import { TRAVEL_DISTANCE } from "./utils";
import { useCallback } from "react";

export interface IUseWheelShortcuts {
  addToCurrentTime: (delta: number) => void;
  addToPlaybackRate: (delta: number) => void;
}

type OnWheelEvent = (e: WheelEvent) => void;

export default function useWheelShortcuts({
  addToCurrentTime,
  addToPlaybackRate,
}: IUseWheelShortcuts): OnWheelEvent {
  const xWheel = useCallback(
    (val: number) => {
      addToCurrentTime(TRAVEL_DISTANCE * (val / 1000));
    },
    [addToCurrentTime],
  );

  const yWheel = useCallback(
    (val: number) => {
      addToPlaybackRate(PLAYBACKRATE_STEP * -(val / 100));
    },
    [addToPlaybackRate],
  );

  const wheelShortcuts: WheelShortcuts = {
    x: xWheel,
    y: yWheel,
  };

  const onWheel = useCallback(
    (e: WheelEvent) => {
      handleWheelShortcuts(e, wheelShortcuts);
    },
    [wheelShortcuts],
  );

  return onWheel;
}
