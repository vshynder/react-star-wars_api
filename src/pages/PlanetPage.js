import React, { useState } from "react";

import { withRouter, useLocation, useHistory } from "react-router";

import LoadSpinner from "../components/LoadSpinner";
import ErrorHandler from "../components/Error";
import PlanetPageInfo from "../components/PlanetPageInfo";

import { Row } from "react-bootstrap";

import { BG_IMAGES } from "../constants";

function PlanetPage({ residentsLoaded }) {
  const history = useHistory();
  const location = useLocation();
  let planet;
  if (location.state) {
    planet = location.state.planet;
  } else {
    history.push("/");
  }

  const goBack = () => {
    history.goBack();
  };

  const [isLoaded, setIsLoaded] = useState(false);
  console.log(residentsLoaded);

  return planet ? (
    <div className="planet__outer">
      {!isLoaded && <LoadSpinner visible={!isLoaded} />}
      <img
        onLoad={() => setIsLoaded(true)}
        className="planet__background"
        alt="space images"
        src={BG_IMAGES[Math.floor(Math.random() * BG_IMAGES.length)]}
        style={{
          visibility: isLoaded ? "visible" : "hidden",
        }}
      />
      <Row
        style={{
          visibility: isLoaded ? "visible" : "hidden",
        }}
        className="planet__text"
      >
        <PlanetPageInfo goBack={goBack} planet={planet} />
      </Row>
    </div>
  ) : (
    <ErrorHandler />
  );
}

export default withRouter(PlanetPage);
