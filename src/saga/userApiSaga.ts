import { call, fork, put, takeEvery, spawn } from "redux-saga/effects";
import { getMyData, getMyTracks, getNewReleases, getPlayList } from "../service/endpoints";
import { AXIOS_GET_MY_DATA, AXIOS_GET_MY_PLAYLIST, AXIOS_GET_MY_TRACKS, AXIOS_GET_NEW_RELEASES, GET_MY_DATA, GET_MY_PLAYLIST, GET_MY_TRACKS, GET_NEW_RELEASES } from "../store/types/userType";

export function* loadPlayListWorker(): any {
  const userPlaylists = yield call(getPlayList);
  yield put({ type: GET_MY_PLAYLIST, payload: userPlaylists });
}

export function* loadMyTracksWorker(): any {
    const userTracks = yield call(getMyTracks);
    yield put({ type: GET_MY_TRACKS, payload: userTracks });
  }

  export function* loadMyDataWorker(): any {
    const userData = yield call(getMyData);
    yield put({ type: GET_MY_DATA, payload: userData });
  }

  export function* loadNewReleases(): any {
    const newRelease = yield call(getNewReleases);
    yield put({ type: GET_NEW_RELEASES, payload: newRelease });
  }


export function* userGetDataWatcher() {
  yield takeEvery(AXIOS_GET_MY_PLAYLIST, loadPlayListWorker);
  yield takeEvery(AXIOS_GET_MY_TRACKS, loadMyTracksWorker);
  yield takeEvery(AXIOS_GET_MY_DATA, loadMyDataWorker);
  yield takeEvery(AXIOS_GET_NEW_RELEASES, loadNewReleases);
}
