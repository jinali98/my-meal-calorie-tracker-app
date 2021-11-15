import { receipeActionTypes } from "./receipes.types";
import { formatReceipeData } from "./receipes.utils";

const INITIAL_STATE = {
  fetchedReceipes: null,
  isLoading: false,
  isStartedToFetch: false,
  errorMessage: "",
};

export const receipeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case receipeActionTypes.START_FETCHING_RECEIPES:
      return {
        ...state,
        isLoading: true,
        isStartedToFetch: true,
      };
    case receipeActionTypes.SUCCESS_FETCHING_RECEIPES:
      return {
        ...state,
        isLoading: false,
        isStartedToFetch: false,
        fetchedReceipes: formatReceipeData(action.payload),
      };
    case receipeActionTypes.FAIL_FETCHING_RECEIPES:
      return {
        ...state,
        isLoading: false,
        isStartedToFetch: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
