import React, {
  SyntheticEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@material-ui/core";

import Video from "./components/Video";
import { useDropzone } from "react-dropzone";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const eventSink = (e: SyntheticEvent): void => {e.preventDefault()}

export default function App(): JSX.Element {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const [src, setSrc] = useState("");
  const [title, setTitle] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSelectVideo = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setTitle(file.name);
    URL.revokeObjectURL(src);
    const objectURL = URL.createObjectURL(file);
    setSrc(objectURL);
  }, [src]);

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.files?.length) {
        // Get the first item and pass it as an array
        onSelectVideo([e.currentTarget.files[0]])
      }
    },
    [onSelectVideo]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop: onSelectVideo });

  const selectSrc = useCallback(() => {
    inputRef.current?.click();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div
        {...getRootProps()}
        style={{ backgroundColor: theme.palette.background.default }}
      >
        <input
          aria-label="Press Ctrl+O to open a video from the local filesystem"
          ref={inputRef}
          type="file"
          accept="video/*,audio/*"
          onChange={onInputChange}
          style={{ display: "none" }}
        />
        <input


          {...getInputProps()}
          style={{ display: "none" }}
          onClick={eventSink}
        />
        <Video src={src} selectSrc={selectSrc} title={title} />
      </div>
    </ThemeProvider>
  );
}
