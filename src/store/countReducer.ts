import { INCREMENT, DECREMENT, ASYNC_INCREMENT, ASYNC_DECREMENT } from "./typesAction";

export const defaultStateOfCounter = {
    counter: 0
};

const counterReducer = (state = defaultStateOfCounter, action:any) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export const incrementAction = () => ({ type: INCREMENT });
export const decrementAction = () => ({ type: DECREMENT });
export const asyncIncrementAction = () => ({ type: ASYNC_INCREMENT });
export const asyncDecrementAction = () => ({ type: ASYNC_DECREMENT });

export default counterReducer;
