import { cookBookActionTypes } from "./cook-book.types";

export const addOrRemoveReceipe = (receipe) => ({
  type: cookBookActionTypes.TOGGLE_RECEIPE_CARD,
  payload: receipe,
});
