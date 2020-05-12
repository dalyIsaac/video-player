import React, { useCallback, useRef, useState } from "react";

import { Button } from "grommet";
import Video from "./Video";

export default function App(): JSX.Element {
  const [src, setSrc] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSelectVideo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.files?.length) {
        const file = e.currentTarget.files[0];
        URL.revokeObjectURL(src);
        const objectURL = URL.createObjectURL(file);
        setSrc(objectURL);
      }
    },
    [src]
  );

  const onOpenClick = useCallback(() => {
    inputRef.current?.click();
  }, []);

  return (
    <div className="App">
      <Button primary label="Open new video" onClick={onOpenClick} />
      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        onChange={onSelectVideo}
        style={{ display: "none" }}
      />
      <Video src={src} />
    </div>
  );
}
