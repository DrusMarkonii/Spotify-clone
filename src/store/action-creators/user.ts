import {
  FETCH_GET_MY_ARTISTS,
  FETCH_GET_MY_DATA,
  FETCH_GET_MY_TRACKS,
  FETCH_GET_NEW_RELEASES,
  GET_MY_ARTISTS,
  GET_MY_DATA,
  GET_MY_TRACKS,
  GET_NEW_RELEASES,
  GET_TOKEN,
} from "../types/userType";

export const getTokenAction = (payload: string) => ({ type: GET_TOKEN, payload });
export const getMyTracksAction = (payload: string) => ({
  type: GET_MY_TRACKS,
  payload,
});
export const fetchMyTracksAction = () => ({ type: FETCH_GET_MY_TRACKS });
export const getMyDataAction = (payload: string) => ({
  type: GET_MY_DATA,
  payload,
});
export const fetchMyDataAction = () => ({ type: FETCH_GET_MY_DATA });
export const getNewReleasesAction = (payload: string) => ({
  type: GET_NEW_RELEASES,
  payload,
});
export const fetchNewReleasesAction = () => ({ type: FETCH_GET_NEW_RELEASES });
export const getMyArtistAction = (payload: string) => ({
  type: GET_MY_ARTISTS,
  payload,
});
export const fetchMyArtistAction = () => ({ type: FETCH_GET_MY_ARTISTS });
