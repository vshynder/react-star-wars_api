import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { planetReducer } from "./redux";
import { residentReducer } from "./redux";

const store = configureStore({
  reducer: {
    planets: planetReducer,
    residents: residentReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
