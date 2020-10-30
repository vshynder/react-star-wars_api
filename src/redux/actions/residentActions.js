import { createAction } from "@reduxjs/toolkit";

const getResidentRequest = createAction("resident/request");
const getResidentSuccess = createAction("resident/success");
const getResidentError = createAction("resident/error");

const clearResidents = createAction("resident/clear");

const actions = {
  getResidentRequest,
  getResidentSuccess,
  getResidentError,
  clearResidents,
};

export default actions;
