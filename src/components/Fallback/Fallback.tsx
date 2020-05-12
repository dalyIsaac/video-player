import React from "react";
import styles from "./Fallback.module.css";

export default function Fallback(): JSX.Element {
  return (
    <div className={styles.root}>
      <img
        src={process.env.PUBLIC_URL + "/android-chrome-192x192.png"}
        alt="Video Player logo"
      />
    </div>
  );
}
