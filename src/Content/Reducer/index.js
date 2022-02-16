import { combineReducers } from "redux";

// reducer
import coin from "./Coin";
import marketCap from "./Marketcap";

const combineReducer = combineReducers({
  coin,
  marketCap,
});

export default combineReducer;
