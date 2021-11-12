import { mealDiaryActionTypes } from "./mealdiary.types";
import { addMealCardsUtil } from "./mealdiary.utils";

const INITIAL_STATE = {
  modalOpen: false,
  mealCards: [],
};

export const mealDiaryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case mealDiaryActionTypes.TOGGLE_MODAL_OPEN_BUTTON:
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
    case mealDiaryActionTypes.ADD_MEAL_CARD:
      return {
        ...state,
        mealCards: addMealCardsUtil(state.mealCards, action.payload),
      };

    default:
      return state;
  }
};
