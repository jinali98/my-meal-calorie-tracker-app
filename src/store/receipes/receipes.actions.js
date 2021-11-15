import { RECEIPE_DATA } from "../../config/api";
import { fetchData } from "../../utils/fetchData";
import { receipeActionTypes } from "./receipes.types";

export const fetchReceipesStarted = () => ({
  type: receipeActionTypes.START_FETCHING_RECEIPES,
});
export const fetchReceipesSuccees = (fetchedData) => ({
  type: receipeActionTypes.SUCCESS_FETCHING_RECEIPES,
  payload: fetchedData,
});
export const fetchReceipesFailed = (errorMessage) => ({
  type: receipeActionTypes.FAIL_FETCHING_RECEIPES,
  payload: errorMessage,
});

export const startFetchingReceipesAsync = ({ mealType, receipeName }) => {
  return async (dispatch) => {
    const url = `${RECEIPE_DATA}${mealType}&q=${receipeName}`;
    try {
      dispatch(fetchReceipesStarted());
      const response = await fetchData(url);
      console.log(response.hits);
      dispatch(fetchReceipesSuccees(response.hits));
    } catch (error) {
      dispatch(fetchReceipesFailed(error.message));
    }
  };
};
