import React, { useEffect } from "react";

import shortid from "shortid";

import { Container, Row, Col } from "react-bootstrap";
import PlanetCard from "./PlanetCard";
import PagesButtons from "./PagesButtons";

import { connect } from "react-redux";
import { planetOperations } from "../redux";

function HomePage({ getPlanets, planets }) {
  useEffect(() => {
    if (!planets) getPlanets("https://swapi.dev/api/planets/");
  }, []);

  return (
    <Container>
      <Row>
        {planets &&
          planets.map((planet) => (
            <PlanetCard planet={planet} key={shortid.generate()} />
          ))}
      </Row>
      <Row>
        <Col>
          <PagesButtons />
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  planets: state.planets.data,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: (url) => dispatch(planetOperations.getPlanets(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
