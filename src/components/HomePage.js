import React, { useEffect } from "react";

import shortid from "shortid";

import Loader from "react-loader-spinner";

import { Container, Row, Col } from "react-bootstrap";
import PlanetCard from "./PlanetCard";
import PagesButtons from "./PagesButtons";

import { connect } from "react-redux";
import { planetOperations } from "../redux";

import { LS_KEY } from "../constants";

function HomePage({ getPlanets, planets }) {
  useEffect(() => {
    if (!planets) {
      let url = "https://swapi.dev/api/planets/";
      const saved_url = localStorage.getItem(LS_KEY);
      if (saved_url) url = saved_url;
      getPlanets(url);
    }
  }, []);

  return planets ? (
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
  ) : (
    <Loader
      className="loader"
      type="Circles"
      color="#00BFFF"
      height={100}
      width={100}
      visible={planets}
    />
  );
}

const mapStateToProps = (state) => ({
  planets: state.planets.data,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: (url) => dispatch(planetOperations.getPlanets(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
