import React, { useCallback, useEffect, useRef, useState } from "react";

import VideoControls from "./VideoControls";
import styles from "./Video.module.css";

export interface IVideo {
  src?: string;
}

export default function Video({ src }: IVideo): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [length, setLength] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const onLoadedMetadata = useCallback(() => {
    setLength(videoRef.current?.duration || 0);
  }, []);

  const updateCurrentTime = useCallback((value: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value;
    }
    setCurrentTime(value);
  }, []);

  return (
    <div>
      <video
        className={styles.video}
        ref={videoRef}
        src={src}
        onLoadedMetadata={onLoadedMetadata}
      />
      <VideoControls
        length={length}
        currentTime={currentTime}
        updateCurrentTime={updateCurrentTime}
      />
    </div>
  );
}
