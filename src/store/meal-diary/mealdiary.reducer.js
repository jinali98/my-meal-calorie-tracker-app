import { mealDiaryActionTypes } from "./mealdiary.types";

const INITIAL_STATE = {
  modalOpen: false,
};

export const mealDiaryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case mealDiaryActionTypes.TOGGLE_MODAL_OPEN_BUTTON:
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };

    default:
      return state;
  }
};
