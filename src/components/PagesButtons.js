import React from "react";

import { Button, ButtonGroup } from "react-bootstrap";

import { connect } from "react-redux";
import { planetOperations } from "../redux";

function PagesButtons({ getPlanets, prevPage, nextPage }) {
  const handlePageChange = (page) => {
    if (page === "prev") {
      getPlanets(prevPage);
    } else {
      getPlanets(nextPage);
    }
  };

  return (
    <ButtonGroup>
      <Button
        onClick={() => handlePageChange("prev")}
        disabled={!prevPage}
        variant="outline-dark"
      >
        Previous page
      </Button>
      <Button
        onClick={() => handlePageChange("next")}
        disabled={!nextPage}
        variant="outline-dark"
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
