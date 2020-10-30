import React from "react";

import { withRouter, useLocation, useHistory } from "react-router";
import { Button } from "react-bootstrap";

import Residents from "./Residents";

import { Container } from "react-bootstrap";

function PlanetPage() {
  const {
    state: { planet },
  } = useLocation();

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <Container>
      <Button onClick={goBack}>Go back</Button>
      <div>name {planet.name}</div>
      <div>rotation_period {planet.rotation_period}</div>
      <div>diameter {planet.diameter}</div>
      <div>climate {planet.climate}</div>
      <div>gravity {planet.gravity}</div>
      <div>terrain {planet.terrain}</div>
      <div>population {planet.population}</div>
      <Residents residentsUrl={planet.residents} />
    </Container>
  );
}

export default withRouter(PlanetPage);
