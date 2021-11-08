import { receipeActionTypes } from "./receipes.types";

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
        fetchedReceipes: action.payload,
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
