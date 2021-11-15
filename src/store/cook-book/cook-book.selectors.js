import { createSelector } from "reselect";

const selectCookBook = (state) => state.cookbook;

export const selectCookBookList = createSelector(
  [selectCookBook],
  (cookBook) => cookBook.cookBookList
);
