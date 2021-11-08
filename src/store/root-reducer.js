import { combineReducers } from "redux";
import { receipeReducer } from "./receipes/receipes.reducer";

export const rootReducer = combineReducers({
  receipes: receipeReducer,
});
