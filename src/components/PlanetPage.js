import React from "react";

import { withRouter, useLocation } from "react-router";

import Residents from "./Residents";

function PlanetPage() {
  const {
    state: { planet },
  } = useLocation();
  console.log(planet);
  return (
    <div>
      <div>name {planet.name}</div>
      <div>rotation_period {planet.rotation_period}</div>
      <div>diameter {planet.diameter}</div>
      <div>climate {planet.climate}</div>
      <div>gravity {planet.gravity}</div>
      <div>terrain {planet.terrain}</div>
      <div>population {planet.population}</div>
      <Residents residentsUrl={planet.residents} />
    </div>
  );
}

export default withRouter(PlanetPage);