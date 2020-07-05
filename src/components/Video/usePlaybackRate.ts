import { PLAYBACKRATE_MAX, PLAYBACKRATE_MIN } from "../PlaybackRate";
import { PLAYBACKRATE_SCALE, roundPlaybackRate } from "../PlaybackRate/utils";
import { useCallback, useState } from "react";

import { Video } from "./utils";

const PLAYBACK_RATE = "PLAYBACK_RATE";

export default function usePlaybackRate(video: Video) {
  const [playbackRate, setPlaybackRate] = useState(
    localStorage.getItem(PLAYBACK_RATE) || "1.0",
  );

  /**
   * @param valueStr Receives the real playback rate value
   */
  const updatePlaybackRate = useCallback(
    (recvValueStr: string) => {
      let valueNumber = parseFloat(recvValueStr) * PLAYBACKRATE_SCALE;
      let newValueStr: string;

      if (isNaN(valueNumber)) {
        newValueStr = "";
      } else {
        if (valueNumber < PLAYBACKRATE_MIN) {
          valueNumber = PLAYBACKRATE_MIN;
        } else if (valueNumber > PLAYBACKRATE_MAX) {
          valueNumber = PLAYBACKRATE_MAX;
        }

        valueNumber /= PLAYBACKRATE_SCALE;
        newValueStr = roundPlaybackRate(valueNumber);

        if (video) {
          video.playbackRate = valueNumber;
        }
      }

      setPlaybackRate(newValueStr);
      localStorage.setItem(PLAYBACK_RATE, newValueStr);
    },
    [video],
  );

  const addToPlaybackRate = useCallback(
    (delta: number) => {
      if (video) {
        delta = Math.ceil(delta);
        const value =
          Math.round(video.playbackRate * PLAYBACKRATE_SCALE + delta) /
          PLAYBACKRATE_SCALE;
        updatePlaybackRate(value.toString());
      }
    },
    [updatePlaybackRate, video],
  );

  return {
    addToPlaybackRate,
    playbackRate,
    setPlaybackRate,
    updatePlaybackRate,
  };
}
