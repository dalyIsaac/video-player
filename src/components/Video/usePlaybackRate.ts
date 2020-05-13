import { PLAYBACKRATE_MAX, PLAYBACKRATE_MIN } from "../PlaybackRate";
import { useCallback, useState } from "react";

import { Video } from "./utils";
import { roundPlaybackRate } from "../PlaybackRate/utils";

export default function usePlaybackRate(video: Video) {
  const [playbackRate, setPlaybackRate] = useState("1.0");

  const updatePlaybackRate = useCallback(
    (valueStr: string) => {
      let value = parseFloat(valueStr);
      if (isNaN(value)) {
        setPlaybackRate("");
      } else if (video) {
        if (value < PLAYBACKRATE_MIN) {
          value = PLAYBACKRATE_MIN;
        } else if (value > PLAYBACKRATE_MAX) {
          value = PLAYBACKRATE_MAX;
        }
        valueStr = roundPlaybackRate(value);
        setPlaybackRate(valueStr);
        video.playbackRate = value;
      }
    },
    [video]
  );

  const addToPlaybackRate = useCallback(
    (delta: number) => {
      if (video) {
        updatePlaybackRate(String(video.playbackRate + delta));
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
