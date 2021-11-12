import { combineReducers } from "redux";
import { calorieCounterReducer } from "./calorie-counter/calorie-counter.reducer";
import { mealDiaryReducer } from "./meal-diary/mealdiary.reducer";
import { receipeReducer } from "./receipes/receipes.reducer";

export const rootReducer = combineReducers({
  receipes: receipeReducer,
  mealDiary: mealDiaryReducer,
  calorieCounter: calorieCounterReducer,
});
