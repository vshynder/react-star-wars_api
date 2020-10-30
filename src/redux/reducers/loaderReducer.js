import { planetActions } from "../actions";
import { createReducer } from "@reduxjs/toolkit";

export const loaderReducer = createReducer(false, {
  [planetActions.getPlanetsRequest]: (state, action) => true,
  [planetActions.getPlanetsSuccess]: (state, action) => false,
  [planetActions.getPlanetsError]: (state, action) => false,
});
