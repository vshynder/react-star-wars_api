import { residentActions } from "../actions";
import { createReducer } from "@reduxjs/toolkit";

export const residentReducer = createReducer([], {
  [residentActions.getResidentSuccess]: (state, action) => {
    return [...state, action.payload.name];
  },
  [residentActions.clearResidents]: (state, action) => [],
});
