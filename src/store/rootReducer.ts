import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../saga/rootWatcher";
import counterReducer from "./countReducer";
import userReducerJson from "./usersReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  users: userReducerJson,
  user: userReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export type RootState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootWatcher);
export default store;