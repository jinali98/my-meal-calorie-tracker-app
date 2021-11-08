import { receipeActionTypes } from "./receipes.types";

export const fetchReceipesStarted = (receipeReq) => ({
  type: receipeActionTypes.START_FETCHING_RECEIPES,
  payload: receipeReq,
});
export const fetchReceipesSuccees = (fetchedData) => ({
  type: receipeActionTypes.START_FETCHING_RECEIPES,
  payload: fetchedData,
});
export const fetchReceipesFailed = (errorMessage) => ({
  type: receipeActionTypes.START_FETCHING_RECEIPES,
  payload: errorMessage,
});
