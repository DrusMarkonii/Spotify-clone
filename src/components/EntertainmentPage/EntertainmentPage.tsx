import { useDispatch, useSelector } from "react-redux";

import {
  asyncDecrementAction,
  asyncIncrementAction,
  decrementAction,
  incrementAction,
} from "../../store/action-creators/count";
import { RootState } from "../../store/reducers/rootReducer";
import { fetchUsers } from "../../store/action-creators/getUsers";
import Header from "../Header/Header";

import "./EntertainmentPage.css";

type userMapType = {
  id: number;
  name: string;
};

export default function EntertainmentPage() {
  const counter = useSelector((state: RootState) => {
    return state.counter.counter;
  });
  const users = useSelector((state: RootState) => {
    return state.users.users;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <div className="entertainment_content_box">
        <div className="counter">counter: {counter}</div>
        <div className="btn-box">
          <button
            onClick={() => dispatch(incrementAction())}
          >
            INCREMENT++
          </button>
          <button
            onClick={() => dispatch(asyncIncrementAction())}
          >
            ASYNC INCREMENT++
          </button>
          <button
            onClick={() => dispatch(asyncDecrementAction())}
          >
            ASYNC DECREMENT--
          </button>
          <button
            onClick={() => dispatch(decrementAction())}
          >
            DECREMENT--
          </button>
          <button
            onClick={() => dispatch(fetchUsers())}
          >
            GET USERS
          </button>
        </div>

        <div className="users-box">
          {users.length > 0 ? (
            <ul className="users-box-list">
              {users.map(({ name, id }: userMapType) => (
                <li className="users-box-item" key={id}>
                  {name}
                </li>
              ))}
            </ul>
          ) : (
            "Users exist"
          )}
        </div>
      </div>
    </div>
  );
}
