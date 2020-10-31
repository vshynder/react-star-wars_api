import React from "react";

import { Button, Card } from "react-bootstrap";
import Residents from "./Residents";

export default function PlanetPageInfo({ planet, goBack }) {
  return (
    <>
      <Card className="planet__text-card m-auto" bg="dark">
        <Card.Header>
          <Button onClick={goBack}>Go back</Button>
        </Card.Header>
        <Card.Body>
          <Card.Title>Planet name: {planet.name}</Card.Title>
          <Card.Text as="ul">
            <li>Rotation period: {planet.rotation_period}</li>
            <li>Diameter: {planet.diameter}</li>
            <li>Climate: {planet.climate}</li>
            <li>Gravity: {planet.gravity}</li>
            <li>Terrain: {planet.terrain}</li>
            <li>Population: {planet.population}</li>
            <li>Terrain: {planet.terrain}</li>
            <li>
              <Residents residentsUrl={planet.residents} />
            </li>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
