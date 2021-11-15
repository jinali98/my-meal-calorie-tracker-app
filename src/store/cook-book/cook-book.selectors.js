import { createSelector } from "reselect";

const selectCookBook = (state) => state.cookbook;

export const selectCookBookList = createSelector(
  [selectCookBook],
  (cookBook) => cookBook.cookBookList
);

export const selectCookBookCount = createSelector(
  [selectCookBookList],
  (cookBookList) => cookBookList.length
);
