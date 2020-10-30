import { planetActions } from "../actions";
import { createReducer } from "@reduxjs/toolkit";

export const planetReducer = createReducer([], {
  [planetActions.getPlanetsSuccess]: (state, action) => ({
    next: action.payload.next,
    prev: action.payload.previous,
    data: action.payload.results,
  }),
});
