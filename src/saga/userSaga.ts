import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_USERS } from "../store/typesAction";
import { setUsers } from "../store/usersReducer";


const fetchUsersFromApi = () => fetch("https://jsonplaceholder.typicode.com/users");

function* fetchUserWorker() {
//   const data = yield call(fetchUsersFromApi);
// //   const json = yield call(() => new Promise((res) => res(data.json())));
//   console.log(json)
//   yield put(setUsers(json));
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
}
