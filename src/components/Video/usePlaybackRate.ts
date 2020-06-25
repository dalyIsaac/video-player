import { PLAYBACKRATE_MAX, PLAYBACKRATE_MIN } from "../PlaybackRate";
import { useCallback, useState } from "react";

import { Video } from "./utils";
import { roundPlaybackRate, PLAYBACKRATE_SCALE } from "../PlaybackRate/utils";

export default function usePlaybackRate(video: Video) {
  const [playbackRate, setPlaybackRate] = useState("1.0");

  /**
   * @param valueStr Receives the real playback rate value
   */
  const updatePlaybackRate = useCallback(
    (valueStr: string) => {
      let value = parseFloat(valueStr) * PLAYBACKRATE_SCALE;

      if (isNaN(value)) {
        setPlaybackRate("");
      } else {
        if (value < PLAYBACKRATE_MIN) {
          value = PLAYBACKRATE_MIN;
        } else if (value > PLAYBACKRATE_MAX) {
          value = PLAYBACKRATE_MAX;
        }

        value /= PLAYBACKRATE_SCALE;
        valueStr = roundPlaybackRate(value);

        setPlaybackRate(valueStr);

        if (video) {
          video.playbackRate = value;
        }
      }
    },
    [video]
  );

  const addToPlaybackRate = useCallback(
    (delta: number) => {
      if (video) {
        delta = Math.ceil(delta);
        let value =
          Math.round(video.playbackRate * PLAYBACKRATE_SCALE + delta) /
          PLAYBACKRATE_SCALE;
        updatePlaybackRate(value.toString());
      }
    },
    [updatePlaybackRate, video]
  );

  return {
    playbackRate,
    setPlaybackRate,
    updatePlaybackRate,
    addToPlaybackRate,
  };
}
