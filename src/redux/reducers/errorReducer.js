import { planetActions, residentActions } from "../actions";
import { createReducer } from "@reduxjs/toolkit";

export const errorReducer = createReducer(false, {
  [planetActions.getPlanetsError]: (state, action) => true,
  [residentActions.getResidentError]: (state, action) => true,
});
