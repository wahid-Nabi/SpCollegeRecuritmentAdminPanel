import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
