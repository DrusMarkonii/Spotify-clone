// import { LOADING_USER, LOADING_USER_ERROR, LOADING_USER_SUCCESS, userType, LOGOUT_USER} from "../types/userType"
import {
  AXIOS_GET_MY_DATA,
  AXIOS_GET_MY_PLAYLIST,
  AXIOS_GET_MY_TRACKS,
  AXIOS_GET_NEW_RELEASES,
  GET_MY_DATA,
  GET_MY_PLAYLIST,
  GET_MY_TRACKS,
  GET_NEW_RELEASES,
  GET_TOKEN,
} from "../types/userType";

export const getTokenAction = (payload: any) => ({ type: GET_TOKEN, payload });
export const getPlaylistAction = (payload: any) => ({
  type: GET_MY_PLAYLIST,
  payload,
});
export const axiosPlaylistAction = () => ({ type: AXIOS_GET_MY_PLAYLIST });
export const getMyTracksAction = (payload: any) => ({
  type: GET_MY_TRACKS,
  payload,
});
export const axiosMyTracksAction = () => ({ type: AXIOS_GET_MY_TRACKS });
export const getMyDataAction = (payload: any) => ({
  type: GET_MY_DATA,
  payload,
});
export const axiosMyDataAction = () => ({ type: AXIOS_GET_MY_DATA });
export const getNewReleasesAction = (payload:any) => ({type: GET_NEW_RELEASES, payload})
export const axiosNewReleasesAction = () => ({ type: AXIOS_GET_NEW_RELEASES });
