export const LOADING_USER = 'LOADING_USER'
export const LOADING_USER_SUCCESS = 'LOADING_USER_SUCCESS'
export const LOADING_USER_ERROR = 'LOADING_USER_ERROR'
export const LOGOUT_USER = 'LOGOUT_USER'


export interface defaultStateUsersType {
    user: null | any
    isLogin: boolean,
    errors: null | string,
  }

 export type userType = {
    access_token: null | string ,
    token_type: null | string,
    expires_in: null | number
}
