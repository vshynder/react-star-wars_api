import actions from "./planetActions";
import { createReducer } from "@reduxjs/toolkit";

export const planetReducer = createReducer([], {
  [actions.getPlanetsSuccess]: (state, action) => ({
    next: action.payload.next,
    prev: action.payload.previous,
    planets: action.payload.results,
  }),
});
