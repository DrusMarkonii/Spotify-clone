import { FETCH_USERS, SET_USERS } from "../types/typesCounterAction";

export const setUsers = (payload: string) => ({ type: SET_USERS, payload });
export const fetchUsers = () => ({ type: FETCH_USERS });
