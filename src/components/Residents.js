import React, { useEffect } from "react";

import { connect } from "react-redux";
import { residentOperations, residentActions } from "../redux";

import { Spinner } from "react-bootstrap";

import shortid from "shortid";

function Residents({
  residentsUrl,
  getResident,
  clearResidents,
  residents,
  residentsLoaded,
}) {
  useEffect(() => {
    clearResidents();
    residentsUrl.length && residentsUrl.forEach((url) => getResident(url));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div>
        residents:
        {residentsLoaded ? (
          residents.length ? (
            <ul className="planet__text-card--residents">
              {residents.map((resident) => (
                <li key={shortid.generate()}>{resident} </li>
              ))}
            </ul>
          ) : (
            <div>no residents</div>
          )
        ) : (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className="ml-4"
            />
            <span className="ml-2">Loading...</span>{" "}
          </>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  residents: state.residents.names,
  residentsLoaded: state.residents.isLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getResident: (url) => dispatch(residentOperations.getResident(url)),
  clearResidents: () => dispatch(residentActions.clearResidents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Residents);
