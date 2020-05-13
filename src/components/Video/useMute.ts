import { useCallback, useState } from "react";

import { Video } from "./utils";

export default function useMute(video: Video) {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMuted = useCallback(() => {
    setIsMuted(!isMuted);
  }, [isMuted]);

  return { isMuted, setIsMuted, toggleMuted };
}
