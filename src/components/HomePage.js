import React, { useEffect } from "react";

import shortid from "shortid";

import { Container, Row } from "react-bootstrap";
import PlanetCard from "./PlanetCard";

import { connect } from "react-redux";
import { planetOperations } from "../redux";

function HomePage({ getPlanets, planets }) {
  useEffect(() => {
    if (!planets) getPlanets();
  }, []);

  return (
    <Container>
      <Row>
        {planets &&
          planets.map((planet) => (
            <PlanetCard planet={planet} key={shortid.generate()} />
          ))}
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  planets: state.planets.data,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () =>
    dispatch(planetOperations.getPlanets("https://swapi.dev/api/planets/")),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
