import { defaultStateArtistType, SET_ID_ARTIST } from "../types/artistType";


const defaultStateArtist: defaultStateArtistType = {
  id: null,
  data: null

};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const USER_Reducer = (state = defaultStateArtist, action: any) => {
  switch (action.type) {
    case SET_ID_ARTIST:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};

export default USER_Reducer;
