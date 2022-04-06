import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncDecrementAction,
  asyncIncrementAction,
  decrementAction,
  incrementAction,
} from "../store/countReducer";
import { RootState } from "../store/rootReducer";
import { fetchUsers } from "../store/usersReducer";

export default function Counter() {
  const counter = useSelector((state: RootState) => {
    return state.counter.counter;
  });
  const users = useSelector((state: RootState) => {
    return state.users.users;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <div>counter: {counter}</div>
      <div
        style={{
          display: "flex",
          margin: "10px auto",
        }}
      >
        <button
          onClick={() => dispatch(incrementAction())}
          style={{ marginRight: "15px" }}
        >
          INCREMENT++
        </button>
        <button
          onClick={() => dispatch(asyncIncrementAction())}
          style={{ marginRight: "15px" }}
        >
          ASYNC INCREMENT++
        </button>
        <button
          onClick={() => dispatch(asyncDecrementAction())}
          style={{ marginRight: "15px" }}
        >
          ASYNC DECREMENT--
        </button>
        <button
          onClick={() => dispatch(decrementAction())}
          style={{ marginRight: "15px" }}
        >
          DECREMENT--
        </button>
        <button
          style={{ marginRight: "15px" }}
          onClick={() => dispatch(fetchUsers())}
        >
          GET USERS
        </button>
      </div>
      <div>
        {users.length > 0 ? (
          <ul>
            {users.map(({ name, id }: any) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        ) : (
          "Users exist"
        )}
      </div>
    </div>
  );
}
