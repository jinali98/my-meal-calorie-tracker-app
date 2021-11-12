import { put, takeLatest } from "redux-saga/effects";
import { fetchReceipesFailed } from "./receipes.actions";
import { receipeActionTypes } from "./receipes.types";

export function* getUserRequestedReceipe({ payload }) {
  try {
    yield;
  } catch (error) {
    yield put(fetchReceipesFailed(error));
  }
}

export function* startFetchingReceipes() {
  yield takeLatest(
    receipeActionTypes.START_FETCHING_RECEIPES,
    getUserRequestedReceipe
  );
}
