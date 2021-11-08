import { createSelector } from "reselect";

const selectMealDiary = (state) => state.mealDiary;

export const selectIsModalOpen = createSelector(
  [selectMealDiary],
  (mealDiary) => mealDiary.modalOpen
);
