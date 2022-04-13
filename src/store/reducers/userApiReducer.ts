import {
  defaultStateUserType,
  GET_TOKEN,
  GET_MY_TRACKS,
  GET_MY_DATA,
  GET_NEW_RELEASES,
  GET_MY_ARTISTS,
} from "../types/userType";

const defaultStateUser: defaultStateUserType = {
  token: null,
  myTracks: null,
  myData: null,
  newReleases: null,
  myArtists: null,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const USER_Reducer = (state = defaultStateUser, action: any) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case GET_MY_DATA:
      return {
        ...state,
        myData: action.payload,
      };
    case GET_MY_TRACKS:
      return {
        ...state,
        myTracks: action.payload,
      };
    case GET_NEW_RELEASES:
      return {
        ...state,
        newReleases: action.payload,
      };
    case GET_MY_ARTISTS:
      return {
        ...state,
        myArtists: action.payload,
      };
    default:
      return state;
  }
};

export default USER_Reducer;
