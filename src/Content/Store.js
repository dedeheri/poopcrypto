import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

// store
import combineReducer from "./Reducer";

const store = createStore(
  combineReducer,
  compose(applyMiddleware(thunk), window?.__REDUX_DEVTOOLS_EXTENSION__?.())
);

export default store;
