import { useEffect } from "react";

export default function useMediaSession(
  metadata: Partial<MediaMetadataInit>,
): void {
  useEffect(() => {
    if ("mediaSession" in navigator && navigator.mediaSession) {
      navigator.mediaSession.metadata = new MediaMetadata(metadata);
    }
  }, [metadata]);
}
