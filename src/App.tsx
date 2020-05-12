import {
  Button,
  ThemeProvider,
  createMuiTheme,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import React, { useCallback, useMemo, useRef, useState } from "react";

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
    <ThemeProvider theme={theme}>
      <div
        style={{ backgroundColor: theme.palette.background.default }}
        className={styles.appRoot}
      >
        <Button variant="contained" color="primary" onClick={onOpenClick}>
          Open new video
        </Button>
        <input
          ref={inputRef}
          type="file"
          accept="video/*"
          onChange={onSelectVideo}
          style={{ display: "none" }}
        />
        <Video src={src} />
      </div>
    </ThemeProvider>
  );
}
