import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../saga/rootWatcher";
import counterReducer from "./countReducer";
import userReducer from "./usersReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export type RootState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootWatcher);
export default store;
