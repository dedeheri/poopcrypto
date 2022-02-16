import { GET_INFORMATION_MARKET_CAP } from "../Action/Action-Types";

const initialState = {
  get: {
    data: [],
    loading: true,
    error: {},
  },
};

const marketCap = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFORMATION_MARKET_CAP: {
      return {
        ...state,
        get: {
          data: action.payload,
          loading: false,
        },
      };
    }
    default:
      return state;
  }
};

export default marketCap;
