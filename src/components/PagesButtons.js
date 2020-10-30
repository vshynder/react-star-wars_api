import React from "react";

import { Button, ButtonGroup } from "react-bootstrap";

import { connect } from "react-redux";
import { planetOperations } from "../redux";

import { LS_KEY } from "../constants";

function PagesButtons({ getPlanets, prevPage, nextPage }) {
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
    <ButtonGroup>
      <Button
        onClick={() => handlePageChange("prev")}
        disabled={!prevPage}
        variant="dark"
      >
        Previous page
      </Button>
      <Button
        onClick={() => handlePageChange("next")}
        disabled={!nextPage}
        variant="dark"
      >
        Next page
      </Button>
    </ButtonGroup>
  );
}

const mapStateToProps = (state) => ({
  nextPage: state.planets.next,
  prevPage: state.planets.prev,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: (url) => dispatch(planetOperations.getPlanets(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PagesButtons);
