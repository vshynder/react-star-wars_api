import React from "react";

import { Col, Card } from "react-bootstrap";
import { withRouter, useHistory } from "react-router";

function PlanetCardItem({ planet }) {
  const history = useHistory();
  const onCardClick = (planet) => {
    history.push(`/${planet.name.toLowerCase()}`, {
      planet: planet,
    });
  };

  return (
    <Col sm={6} lg={4} className="mb-2">
      <Card bg="dark" text="white" onClick={() => onCardClick(planet)}>
        <Card.Header as="h4">{planet.name}</Card.Header>
        <Card.Body>
          <Card.Title as="p">climate - {planet.climate}</Card.Title>
          <Card.Text as="p">population: {planet.population}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default withRouter(PlanetCardItem);
