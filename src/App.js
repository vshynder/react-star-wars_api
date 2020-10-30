import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PlanetPage from "./pages/PlanetPage";

import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/:planet">
        <PlanetPage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
