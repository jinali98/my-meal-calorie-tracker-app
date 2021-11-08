import { createSelector } from "reselect";

const selectReceipes = (state) => state.receipes;

export const selectFetchedReceipes = createSelector(
  [selectReceipes],
  (receipes) => receipes.fetchedReceipes
);
export const selectLoadingStatus = createSelector(
  [selectReceipes],
  (receipes) => receipes.isLoading
);
export const selectErrorMessage = createSelector(
  [selectReceipes],
  (receipes) => receipes.errorMessage
);
export const selectFetchedStarted = createSelector(
  [selectReceipes],
  (receipes) => receipes.isStartedToFetch
);
