// export const LOADING_USER = 'LOADING_USER'
// export const LOADING_USER_SUCCESS = 'LOADING_USER_SUCCESS'
// export const LOADING_USER_ERROR = 'LOADING_USER_ERROR'
// export const LOGOUT_USER = 'LOGOUT_USER'

export const GET_TOKEN = 'GET_TOKEN'
export const GET_MY_PLAYLIST ='GET_MY_PLAYLIST'
export const AXIOS_GET_MY_PLAYLIST ='AXIOS_GET_MY_PLAYLIST'
export const GET_MY_TRACKS ='GET_MY_TRACKS'
export const AXIOS_GET_MY_TRACKS ='AXIOS_GET_MY_TRACKS'



export interface defaultStateTokenType {
    token: null | string;
    myPlaylist: any;
    myTracks: any
    

  }

//  export type userType = {
//     access_token: null | string ,
//     token_type: null | string,
//     expires_in: null | number
// }
