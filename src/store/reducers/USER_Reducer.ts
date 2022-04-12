import { defaultStateUserType, GET_MY_PLAYLIST, GET_TOKEN, GET_MY_TRACKS, GET_MY_DATA, GET_NEW_RELEASES} from "../types/userType";

const defaultStateUser: defaultStateUserType = {
  token: null,
  myPlaylist: null,
  myTracks: null,
  myData: null,
  newReleases: null

};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const USER_Reducer = (state = defaultStateUser, action: any) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
      case GET_MY_PLAYLIST:
      return {
        ...state,
        myPlaylist: action.payload
      };
      case GET_MY_DATA:
      return {
        ...state,
        myData: action.payload
      };
      case GET_MY_TRACKS:
      return {
        ...state,
        myTracks: action.payload
      };
      case GET_NEW_RELEASES:
      return {
        ...state,
        newReleases: action.payload
      };
    default:
      return state;
  }
};

export default USER_Reducer;