import { call, put, delay, takeLatest } from "redux-saga/effects";
import { incrementBy, incrementAsyncReq } from "../counter/counterSlice.ts";

function* randomdeltasaga(): any {
  try {
    yield delay(1000);
    const amt = yield call(Math.random);
    const delta = Math.round(amt * 10);
    console.log("incrementing: " + delta);
    yield put(incrementBy(delta));
  }
  catch (e) {
    console.log("error");
  }
}

export function* watchcountersaga() {
  yield takeLatest(incrementAsyncReq.type, randomdeltasaga);
}
