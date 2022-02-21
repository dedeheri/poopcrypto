import {
  GET_COIN,
  GET_DETAIL_COIN,
  FAILED_GET_DETAIL_COIN,
  GET_HISTORY_COIN,
  REMOVE_DETAIL_COIN,
  REMOVE_GET_HISTORY_COIN,
  LOADING_PERSIZE_COIN_COIN,
} from "../Action/Action-Types";

const initialState = {
  get: {
    coins: [],
    loading: true,
    error: [],
  },
  loadingPerZise: true,

  detail: {
    coin: [],
    loading: true,
    error: [],
  },

  history: {
    timestamps: [],
    error: "",
    loading: true,
  },
};

const coin = (state = initialState, action) => {
  switch (action.type) {
    case GET_COIN: {
      return {
        ...state,
        get: {
          coins: action.payload,
          loading: false,
        },
        loadingPerZise: false,
      };
    }

    case LOADING_PERSIZE_COIN_COIN: {
      return {
        ...state,
        loadingPerZise: true,
      };
    }

    case GET_DETAIL_COIN: {
      return {
        ...state,
        detail: {
          coin: action.payload,
          loading: false,
        },
      };
    }
    case REMOVE_DETAIL_COIN: {
      return {
        ...state,
        detail: {
          coin: {},
          loading: true,
        },
      };
    }
    case GET_HISTORY_COIN: {
      return {
        ...state,
        history: {
          timestamps: action.payload,
          loading: false,
        },
      };
    }
    case REMOVE_GET_HISTORY_COIN: {
      return {
        ...state,
        history: {
          timestamps: {},
          loading: true,
        },
      };
    }
    case FAILED_GET_DETAIL_COIN: {
      return {
        ...state,
        detail: {
          error: action.payload,
          loading: false,
        },
      };
    }
    default:
      return state;
  }
};

export default coin;
