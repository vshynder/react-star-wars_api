import React, { useEffect } from "react";

import { connect } from "react-redux";
import { residentOperations, residentActions } from "../redux";

import shortid from "shortid";

function Residents({ residentsUrl, getResident, clearResidents, residents }) {
  useEffect(() => {
    clearResidents();
    residentsUrl.length && residentsUrl.forEach((url) => getResident(url));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {residents.length ? (
        <div>
          residents:
          <ul className="planet__text-card--residents">
            {residents.map((resident) => (
              <li key={shortid.generate()}>{resident} </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>no residents</div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  residents: state.residents,
});

const mapDispatchToProps = (dispatch) => ({
  getResident: (url) => dispatch(residentOperations.getResident(url)),
  clearResidents: () => dispatch(residentActions.clearResidents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Residents);
