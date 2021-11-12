import { mealDiaryActionTypes } from "./mealdiary.types";

export const toggleModalButton = () => ({
  type: mealDiaryActionTypes.TOGGLE_MODAL_OPEN_BUTTON,
});
export const addMealCard = (item) => ({
  type: mealDiaryActionTypes.ADD_MEAL_CARD,
  payload: item,
});
