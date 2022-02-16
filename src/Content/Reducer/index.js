import { combineReducers } from "redux";

// reducer
import coin from "./Coin";
import marketCap from "./Marketcap";
import news from "./News";

const combineReducer = combineReducers({
  coin,
  marketCap,
  news,
});

export default combineReducer;
