import { residentActions } from "../actions";
import { createReducer } from "@reduxjs/toolkit";

const initState = { names: [], isLoaded: false };

export const residentReducer = createReducer(initState, {
  [residentActions.getResidentRequest]: (state, action) => ({
    names: [],
    isLoaded: false,
  }),
  [residentActions.getResidentSuccess]: (state, action) => ({
    names: [...state.names, action.payload.name],
    isLoaded: true,
  }),
  [residentActions.clearResidents]: (state, action) => ({
    names: [],
    isLoaded: true,
  }),
});
