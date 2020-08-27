import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Axios from "axios";

Axios.defaults.baseURL = " https://kairostreats.com/api/v1";
const headers = {
  "Cache-Control": "no - cache, private",
  "X-RateLimit-Limit": 60,
  "X-RateLimit-Remaining": 59,
  "Access-Control-Allow-Origin": "*",
  "Content-Encoding": "gzip",
  "Content-Type": "application / json",
};

Axios.defaults.headers.common = headers;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
