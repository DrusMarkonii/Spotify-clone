import { call, put, takeEvery } from "redux-saga/effects";
import {
  getMyArtists,
  getMyData,
  getMyTracks,
  getNewReleases,
} from "../../service/endpoints";
import {
  AXIOS_GET_MY_ARTISTS,
  AXIOS_GET_MY_DATA,
  AXIOS_GET_MY_TRACKS,
  AXIOS_GET_NEW_RELEASES,
  GET_MY_ARTISTS,
  GET_MY_DATA,
  GET_MY_TRACKS,
  GET_NEW_RELEASES,
} from "../types/userType";



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

export function* loadMyArtist(): any {
  const myArtists = yield call(getMyArtists);
  yield put({ type: GET_MY_ARTISTS, payload: myArtists });
}

export function* userGetDataWatcher() {
  yield takeEvery(AXIOS_GET_MY_TRACKS, loadMyTracksWorker);
  yield takeEvery(AXIOS_GET_MY_DATA, loadMyDataWorker);
  yield takeEvery(AXIOS_GET_NEW_RELEASES, loadNewReleases);
  yield takeEvery(AXIOS_GET_MY_ARTISTS, loadMyArtist);
}
