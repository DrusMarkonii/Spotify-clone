import { LOADING_USER, LOADING_USER_ERROR, LOADING_USER_SUCCESS, userType, LOGOUT_USER} from "../types/userType"

export const loadingUserAction = () => ({type: LOADING_USER})
export const logOutUserAction = () => ({type: LOGOUT_USER})
export const loadingUserSuccessAction = (payload: userType) => ({ type: LOADING_USER_SUCCESS, payload });
export const loadingUserErrorAction = (payload:string) => ({type: LOADING_USER_ERROR})