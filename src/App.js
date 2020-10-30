import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import PlanetPage from "./components/PlanetPage";

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
