import { useCallback, useState } from "react";

export default function useMute() {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMuted = useCallback(() => {
    setIsMuted(!isMuted);
  }, [isMuted]);

  return { isMuted, setIsMuted, toggleMuted };
}
