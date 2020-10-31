import React, { useEffect } from "react";

import { Container } from "react-bootstrap";
import PagesButtons from "../components/PagesButtons";
import LoadSpinner from "../components/LoadSpinner";
import PlanetsCards from "../components/PlanetsCards";
import ErrorHandler from "../components/Error";

import { connect } from "react-redux";
import { planetOperations } from "../redux";

import { LS_KEY } from "../constants";

function HomePage({ getPlanets, planets, error }) {
  useEffect(() => {
    if (!planets) {
      let url = "https://swapi.dev/api/planets/";
      const saved_url = localStorage.getItem(LS_KEY);
      if (saved_url) url = saved_url;
      getPlanets(url);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="planet">
      {planets ? (
        <Container className="py-3">
          <PlanetsCards planets={planets} />
          <PagesButtons />
        </Container>
      ) : error ? (
        <ErrorHandler />
      ) : (
        <LoadSpinner visible={planets} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  planets: state.planets.data,
  error: state.isError,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: (url) => dispatch(planetOperations.getPlanets(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
