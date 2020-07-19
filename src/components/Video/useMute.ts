import { useCallback, useState } from "react";

export interface IUseMute {
  isMuted: boolean;
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMuted: () => void;
}

export default function useMute(): IUseMute {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMuted = useCallback(() => {
    setIsMuted(!isMuted);
  }, [isMuted]);

  return { isMuted, setIsMuted, toggleMuted };
}
