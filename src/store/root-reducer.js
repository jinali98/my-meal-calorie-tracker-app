import { combineReducers } from "redux";
import { mealDiaryReducer } from "./meal-diary/mealdiary.reducer";
import { receipeReducer } from "./receipes/receipes.reducer";

export const rootReducer = combineReducers({
  receipes: receipeReducer,
  mealDiary: mealDiaryReducer,
});
