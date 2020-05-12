import * as serviceWorker from "./serviceWorker";

import { Grommet, ThemeType } from "grommet";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

const theme: ThemeType = {
  global: {
    font: {
      family: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
               'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
               sans-serif`,
      size: "18px",
      height: "20px",
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={theme}>
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
