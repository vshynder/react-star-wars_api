import React, { useState } from "react";

import { withRouter, useLocation, useHistory } from "react-router";
import { Button } from "react-bootstrap";

import Residents from "./Residents";
import LoadSpinner from "./LoadSpinner";

import { Container } from "react-bootstrap";

import { BG_IMAGES } from "../constants";

function PlanetPage() {
  const {
    state: { planet },
  } = useLocation();

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="planet__outer">
      {!isLoaded && <LoadSpinner visible={!isLoaded} />}
      <img
        onLoad={() => setIsLoaded(true)}
        className="planet__background"
        alt="space images"
        src={BG_IMAGES[Math.floor(Math.random() * BG_IMAGES.length)]}
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
      />
      <Container
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
        className="planet__text"
      >
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
    </div>
  );
}

export default withRouter(PlanetPage);
