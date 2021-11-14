import { receipeActionTypes } from "./receipes.types";

export const fetchReceipesStarted = () => ({
  type: receipeActionTypes.START_FETCHING_RECEIPES,
});
export const fetchReceipesSuccees = (fetchedData) => ({
  type: receipeActionTypes.START_FETCHING_RECEIPES,
  payload: fetchedData,
});
export const fetchReceipesFailed = (errorMessage) => ({
  type: receipeActionTypes.START_FETCHING_RECEIPES,
  payload: errorMessage,
});

export const startFetchingReceipesAsync = () => {
  return async (dispatch) => {
    dispatch(fetchReceipesStarted());
    try {
    } catch (error) {
      dispatch(fetchReceipesFailed(error.message));
    }
  };
};
