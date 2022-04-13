import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_USERS } from "../types/typesCounterAction";
import { setUsers } from "../action-creators/getUsers";

const fetchUsersFromApi: any = () =>
  fetch("https://jsonplaceholder.typicode.com/users");

function* fetchUserWorker(): any {
  const data = yield call(fetchUsersFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setUsers(json));
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
}
