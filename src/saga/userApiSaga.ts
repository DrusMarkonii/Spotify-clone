import { call, fork, put, takeEvery, spawn } from "redux-saga/effects";
import { getMyTracks, getPlayList } from "../service/endpoints";
import { AXIOS_GET_MY_PLAYLIST, AXIOS_GET_MY_TRACKS, GET_MY_PLAYLIST, GET_MY_TRACKS } from "../store/types/userType";

export function* loadPlayListWorker(): any {
  const userPlaylists = yield call(getPlayList);
  yield put({ type: GET_MY_PLAYLIST, payload: userPlaylists });
}

export function* loadMyTracksWorker(): any {
    const userTracks = yield call(getMyTracks);
    yield put({ type: GET_MY_TRACKS, payload: userTracks });
  }

export function* userGetDataWatcher() {
  yield takeEvery(AXIOS_GET_MY_PLAYLIST, loadPlayListWorker);
  yield takeEvery(AXIOS_GET_MY_TRACKS, loadMyTracksWorker);
}

// const fetchUsersFromApi:any = () => fetch("https://jsonplaceholder.typicode.com/users");

// function* fetchUserWorker():any {
//   const data = yield call(fetchUsersFromApi);
//   const json = yield call(() => new Promise((res) => res(data.json())));
//   console.log(json)
//   yield put(setUsers(json));
// }

// export function* userWatcher() {
//   yield takeEvery(FETCH_USERS, fetchUserWorker);
// }
