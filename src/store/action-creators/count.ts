import {
  ASYNC_DECREMENT,
  ASYNC_INCREMENT,
  DECREMENT,
  INCREMENT,
} from "../types/typesCounterAction";

export const incrementAction = () => ({ type: INCREMENT });
export const decrementAction = () => ({ type: DECREMENT });
export const asyncIncrementAction = () => ({ type: ASYNC_INCREMENT });
export const asyncDecrementAction = () => ({ type: ASYNC_DECREMENT });
