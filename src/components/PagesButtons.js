import React from "react";

import { Button, ButtonGroup, Row, Col } from "react-bootstrap";

import { connect } from "react-redux";
import { planetOperations } from "../redux";

import { LS_KEY } from "../constants";

function PagesButtons({ getPlanets, prevPage, nextPage, isLoading }) {
  const handlePageChange = (page) => {
    let url;
    if (page === "prev") {
      url = prevPage;
    } else {
      url = nextPage;
    }
    localStorage.setItem(LS_KEY, url);
    getPlanets(url);
  };

  return (
    <Row>
      <Col>
        <Button
          className="page__button"
          onClick={() => handlePageChange("prev")}
          disabled={!prevPage || isLoading}
          variant="dark"
        >
          {isLoading ? "Loading..." : "Previous page"}
        </Button>
      </Col>
      <Col>
        <Button
          className="page__button"
          onClick={() => handlePageChange("next")}
          disabled={!nextPage || isLoading}
          variant="dark"
        >
          {isLoading ? "Loading..." : "Next page"}
        </Button>
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => ({
  nextPage: state.planets.next,
  prevPage: state.planets.prev,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: (url) => dispatch(planetOperations.getPlanets(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PagesButtons);
