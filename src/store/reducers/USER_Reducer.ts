import { defaultStateTokenType, GET_MY_PLAYLIST, GET_TOKEN, GET_MY_TRACKS} from "../types/userType";

const defaultStateToken: defaultStateTokenType = {
  token: null,
  myPlaylist: null,
  myTracks: null

};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const USER_Reducer = (state = defaultStateToken, action: any) => {
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
      case GET_MY_TRACKS:
      return {
        ...state,
        myTracks: action.payload
      };
    default:
      return state;
  }
};

export default USER_Reducer;
