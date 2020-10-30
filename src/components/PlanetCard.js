import React from "react";

import { Col, Card } from "react-bootstrap";
import { withRouter, useHistory } from "react-router";

function PlanetCard({ planet }) {
  const history = useHistory();
  const onCardClick = (planet) => {
    history.push(`/${planet.name}`, {
      planet: planet,
    });
  };

  return (
    <Col sm={6} lg={4}>
      <Card onClick={() => onCardClick(planet)}>
        <Card.Header>{planet.name}</Card.Header>
        <Card.Body>
          <Card.Title>{planet.climate}</Card.Title>
          <Card.Text>{planet.population}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default withRouter(PlanetCard);
