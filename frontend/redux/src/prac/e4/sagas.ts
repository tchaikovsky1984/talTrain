import { call, put, takeLatest } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchAPIReq, fetchFailed, INITIAL_DATA_LOADED } from "./slice.ts";

function mockAPI(id: number) {
  return {
    payload: {
      user: {},
      products: []
    }
  };
}

function* interceptSaga(action: PayloadAction<{ id: number }>) {
  try {
    const data = yield call(mockAPI, action.payload.id);
    yield put(INITIAL_DATA_LOADED(data));
  }
  catch (e) {
    yield put(fetchFailed("error"));
  }
}
