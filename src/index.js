import React from "react";
import ReactDOM from "react-dom";
import "./GlobalStyle.js";
import App from "./App";
import { GlobalStyle } from "./GlobalStyle";
import { Provider } from "react-redux";
import store from "./store.js";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <GlobalStyle />
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
