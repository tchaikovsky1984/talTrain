import type { PayloadAction } from "@reduxjs/toolkit";
import { put, call, takeEvery } from "redux-saga/effects";
import { fetchAPIReq, fetchFailed } from "./slice";

function apiInteraction() {
  if (Math.random() > 0.5) {
    console.log("interaction");
  }
  else {
    throw new Error();
  }
}

function logToService() {
  return;
}

function* errorHandler(action: PayloadAction<any>) {
  try {
    yield call(apiInteraction);
  }
  catch (e) {
    yield put(fetchFailed("Something went wrong!"));
    yield call(logToService);
  }
}

function* watchErrors() {
  yield takeEvery(fetchAPIReq, errorHandler);
}
