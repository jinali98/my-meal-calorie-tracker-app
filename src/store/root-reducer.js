import { combineReducers } from "redux";
import { calorieCounterReducer } from "./calorie-counter/calorie-counter.reducer";
import { mealDiaryReducer } from "./meal-diary/mealdiary.reducer";
import { receipeReducer } from "./receipes/receipes.reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { cookBooKReducer } from "./cook-book/cook-book.reducer";

const persistConfig = {
  key: "myMeal",
  storage,
  whitelist: ["mealDiary", "cookbook"],
};

const rootReducer = combineReducers({
  receipes: receipeReducer,
  mealDiary: mealDiaryReducer,
  calorieCounter: calorieCounterReducer,
  cookbook: cookBooKReducer,
});

export default persistReducer(persistConfig, rootReducer);
