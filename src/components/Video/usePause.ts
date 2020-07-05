import { useCallback, useState } from "react";

import { Video } from "./utils";

export default function usePause(video: Video, videoLoaded: boolean) {
  const [isPaused, setIsPaused] = useState(true);

  const togglePaused = useCallback(() => {
    if (video && videoLoaded) {
      if (isPaused) {
        video.play();
      } else {
        video.pause();
      }
      setIsPaused(!isPaused);
    }
  }, [isPaused, video, videoLoaded]);

  const onPause = useCallback(() => {
    setIsPaused(true);
  }, []);

  const onPlay = useCallback(() => {
    setIsPaused(false);
  }, []);

  return { isPaused, onPause, onPlay, setIsPaused, togglePaused };
}
