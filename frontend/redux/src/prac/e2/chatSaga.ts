import type { TakeableChannel } from "redux-saga";
import { takeEvery } from "redux-saga/effects";

function mockAction() {
  return;
}

function chatHandler() {
  return;
}

function* chatwatcher() {
  yield takeEvery(mockAction as any, chatHandler);
}
