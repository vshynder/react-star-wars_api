import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import {
  planetReducer,
  residentReducer,
  loaderReducer,
  errorReducer,
} from "./redux";

const store = configureStore({
  reducer: {
    planets: planetReducer,
    residents: residentReducer,
    isLoading: loaderReducer,
    isError: errorReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
