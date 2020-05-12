import "./index.css";

import * as serviceWorker from "./serviceWorker";

import React, { Suspense, lazy } from "react";

import Fallback from "./components/Fallback";
import ReactDOM from "react-dom";

const App = lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={Fallback}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
