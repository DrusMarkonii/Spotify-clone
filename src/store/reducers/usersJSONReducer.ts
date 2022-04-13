import { SET_USERS } from "../types/typesCounterAction";

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

export default userReducer;
