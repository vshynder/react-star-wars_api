import React from "react";

import shortid from "shortid";

import { Row } from "react-bootstrap";

import PlanetCardItem from "./PlanetCardItem";

export default function PlanetsCards({ planets }) {
  return (
    <Row>
      {planets &&
        planets.map((planet) => (
          <PlanetCardItem planet={planet} key={shortid.generate()} />
        ))}
    </Row>
  );
}
