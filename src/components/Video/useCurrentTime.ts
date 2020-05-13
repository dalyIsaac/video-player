import { useCallback, useState } from "react";

import { Video } from "./utils";

export default function useCurrentTime(video: Video, duration: number) {
  const [currentTime, setCurrentTime] = useState(0);

  const updateCurrentTime = useCallback(
    (value: number, isEvent = false) => {
      if (video && !isEvent) {
        video.currentTime = value;
      }
      setCurrentTime(value);
    },
    [video]
  );

  const addToCurrentTime = useCallback(
    (delta: number) => {
      if (video) {
        let value = video.currentTime + delta;

        if (value < 0) {
          value = 0;
        } else if (value > duration) {
          value = duration;
        }

        updateCurrentTime(value);
      }
    },
    [duration, updateCurrentTime, video]
  );

  const onTimeUpdate = useCallback(() => {
    const time = video?.currentTime;
    if (time) {
      updateCurrentTime(time, true);
    }
  }, [updateCurrentTime, video]);

  return {
    currentTime,
    setCurrentTime,
    updateCurrentTime,
    addToCurrentTime,
    onTimeUpdate,
  };
}
