import { all } from "redux-saga/effects";
import { userWatcher } from "./userSaga";
import countWatcher from "./counterSaga";
import { userGetDataWatcher } from "./userApiSaga";

export function* rootWatcher() {
  yield all([userWatcher(), countWatcher(), userGetDataWatcher()]);
}
