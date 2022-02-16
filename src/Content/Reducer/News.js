import {
  GET_NEWS_BY_QUERY,
  REMOVE_NEWS_BY_QUERY,
} from "../Action/Action-Types";

const initialState = {
  details: {
    news: {},
    error: {},
    loading: true,
  },
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_BY_QUERY: {
      return {
        ...state,
        details: {
          news: action.payload,
          loading: false,
        },
      };
    }
    case REMOVE_NEWS_BY_QUERY: {
      return {
        ...state,
        details: {
          news: {},
          loading: true,
        },
      };
    }

    default:
      return state;
  }
};

export default news;
