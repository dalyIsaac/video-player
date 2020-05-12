import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";

import Video from "./components/Video";

const useStyles = makeStyles({
  appRoot: {
    height: "100vh",
    width: "100vw",
  },
});

export default function App(): JSX.Element {
  const styles = useStyles();

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const [src, setSrc] = useState("");
  const [title, setTitle] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSelectVideo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.files?.length) {
        const file = e.currentTarget.files[0];
        setTitle(file.name);
        URL.revokeObjectURL(src);
        const objectURL = URL.createObjectURL(file);
        setSrc(objectURL);
      }
    },
    [src]
  );

  const selectSrc = useCallback(() => {
    inputRef.current?.click();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{ backgroundColor: theme.palette.background.default }}
        className={styles.appRoot}
      >
        <input
          aria-label="Press Ctrl+O to open a video from the local filesystem"
          ref={inputRef}
          type="file"
          accept="video/*"
          onChange={onSelectVideo}
          style={{ display: "none" }}
        />
        <Video src={src} selectSrc={selectSrc} title={title} />
      </div>
    </ThemeProvider>
  );
}
