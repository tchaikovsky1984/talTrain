import { call, put, takeLatest } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MATH_REQ, MATH_RES } from "./slice";

function sqaured(x: number) {
  return x * x;
}

function* sqaureSaga(action: PayloadAction<number>): any {
  try {
    const sqaure = yield call(sqaured, action.payload);
    yield put(MATH_RES(sqaure));
  }
  catch (e) {
    console.log(e);
  }
}

function* watchSquare() {
  yield takeLatest(MATH_REQ, sqaureSaga);
}
