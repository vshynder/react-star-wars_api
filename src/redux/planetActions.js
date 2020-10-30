import { createAction } from "@reduxjs/toolkit";

const getPlanetsRequest = createAction("planets/request");
const getPlanetsSuccess = createAction("planets/succes");
const getPlanetsError = createAction("planets/error");

const actions = {
  getPlanetsRequest,
  getPlanetsSuccess,
  getPlanetsError,
};

export default actions;
