import { useCallback, useState } from "react";

import { Video } from "./utils";

export interface IUsePause {
  isPaused: boolean;
  onPause: () => void;
  onPlay: () => void;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  togglePaused: () => void;
}

export default function usePause(
  video: Video,
  videoLoaded: boolean,
): IUsePause {
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
