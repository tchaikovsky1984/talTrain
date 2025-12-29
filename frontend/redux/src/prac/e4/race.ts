import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchAPIReq, USER_CANCEL_CLICK, sent } from "./chatSlice.ts";
import { race, call, put, takeLatest, take, takeEvery } from "redux-saga/effects";


function mockSagaCancel() {
  //killing the sending timeout
  return;
}
function sendThruAPI(a: any) {
  return;
}

function* GoingRacing(action: PayloadAction<any>): any {
  try {
    const [cancel, send] = yield race({
      cancel: takeLatest(USER_CANCEL_CLICK, mockSagaCancel),
      send: call(sendThruAPI, action)
    });
    if (cancel) {
      console.log("cancelled by user");
      return;
    }
    console.log("sent");
  }
  catch (e) {
    console.log("failed");
  }
}

function* raceWatcher() {
  yield takeEvery(sent, GoingRacing);
}
