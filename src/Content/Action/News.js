import axios from "axios";
import { GET_NEWS_BY_QUERY } from "./Action-Types";

export const getNewsByQuery = (query) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        "https://bing-news-search1.p.rapidapi.com/news/search",
        {
          params: {
            q: query,
            freshness: "Day",
            textFormat: "Raw",
            safeSearch: "Off",
            count: "50",
          },
          headers: {
            "x-bingapis-sdk": "true",
            "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
            "x-rapidapi-key":
              "d280df9834mshbccf37a598cb8a8p1952eejsn29939f952305",
          },
        }
      );

      dispatch({ type: GET_NEWS_BY_QUERY, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};
