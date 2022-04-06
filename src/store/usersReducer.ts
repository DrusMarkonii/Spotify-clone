import { FETCH_USERS, SET_USERS } from "./typesAction";

export const defaultStateUsers = {
  users: [],
};

const userReducer = (state = defaultStateUsers, action: any) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export const setUsers = (payload: any) => ({ type: SET_USERS, payload });
export const fetchUsers = () => ({ type: FETCH_USERS });

export default userReducer;
