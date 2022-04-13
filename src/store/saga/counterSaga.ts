import { put, takeEvery } from "@redux-saga/core/effects";
import { decrementAction, incrementAction } from "../action-creators/count";

import { ASYNC_DECREMENT, ASYNC_INCREMENT } from "../types/typesCounterAction";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* incrementWorker() {
  try {
    yield delay(1000);
    yield put(incrementAction());
  } catch (e) {
    console.log(e);
  }
}

function* decrementWorker() {
  try {
    yield delay(1000);
    yield put(decrementAction());
  } catch (e) {
    console.log(e);
  }
}

function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementWorker);
  yield takeEvery(ASYNC_DECREMENT, decrementWorker);
}

export default countWatcher;
