import { INCREMENT, DECREMENT } from "../types/typesCounterAction";

export const defaultStateOfCounter = {
  counter: 0,
};

const counterReducer = (state = defaultStateOfCounter, action: any) => {
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

export default counterReducer;
