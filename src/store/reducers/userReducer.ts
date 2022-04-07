import {
  defaultStateUsersType,
  LOADING_USER,
  LOADING_USER_ERROR,
  LOADING_USER_SUCCESS,
  LOGOUT_USER,
} from "../types/userType";


const defaultStateUsers: defaultStateUsersType = {
  user: null,
  isLogin: false,
  errors: null,
  
};

const userReducer = (state = defaultStateUsers, action: any) => {
  switch (action.type) {
    case LOADING_USER:
      return { user: null, isLoading: true, errors: null };
    case LOADING_USER_SUCCESS:
      return { user: action.payload, isLoading: false, errors: null };
    case LOADING_USER_ERROR:
      return { user: null, isLoading: false, errors: action.payload };
      case LOGOUT_USER:
      return { user: null, isLoading: false, errors: null };
    default:
      return state;
  }
};




export default userReducer;
