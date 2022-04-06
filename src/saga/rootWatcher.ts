import { all } from "redux-saga/effects";
import { userWatcher } from "./userSaga";
import countWatcher from "./counterSaga";

export function* rootWatcher() {
  yield all([userWatcher(), countWatcher()]);
}
