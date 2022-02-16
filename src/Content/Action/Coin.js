import axios from "axios";
import {
  FAILED_GET_DETAIL_COIN,
  GET_COIN,
  GET_DETAIL_COIN,
  GET_HISTORY_COIN,
  GET_INFORMATION_MARKET_CAP,
} from "./Action-Types";

const coinGecko = {
  headers: {
    params: {
      vs_currency: "usd",
      page: "1",
      per_page: "100",
      order: "market_cap_desc",
    },
    headers: {
      "x-rapidapi-host": "coingecko.p.rapidapi.com",
      "x-rapidapi-key": "d280df9834mshbccf37a598cb8a8p1952eejsn29939f952305",
    },
  },

  headersHistory: {
    params: { vs_currency: "idr", days: "1" },
    headers: {
      "x-rapidapi-host": "coingecko.p.rapidapi.com",
      "x-rapidapi-key": "d280df9834mshbccf37a598cb8a8p1952eejsn29939f952305",
    },
  },

  URL: "https://coingecko.p.rapidapi.com/coins/markets",
  URL_DETAIL: "https://coingecko.p.rapidapi.com/coins/",
  // URL_HISTORY: `https://coingecko.p.rapidapi.com/coins/${id}/market_chart`,
};

const coinRanking = {
  headers: {
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      tiers: "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
      offset: "0",
    },
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "d280df9834mshbccf37a598cb8a8p1952eejsn29939f952305",
    },
  },

  URL: "https://coinranking1.p.rapidapi.com/coins",
};

export const getCoins = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(coinGecko.URL, coinGecko.headers);
      dispatch({ type: GET_COIN, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getDetailCoin = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        coinGecko.URL_DETAIL + id,
        coinGecko.headers
      );
      dispatch({ type: GET_DETAIL_COIN, payload: data });
    } catch (error) {
      dispatch({ type: FAILED_GET_DETAIL_COIN, payload: error });
    }
  };
};

export const getHistoryCoin = (id, days) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://coingecko.p.rapidapi.com/coins/${id}/market_chart`,
        {
          params: { vs_currency: "idr", days: days },
          headers: {
            "x-rapidapi-host": "coingecko.p.rapidapi.com",
            "x-rapidapi-key":
              "d280df9834mshbccf37a598cb8a8p1952eejsn29939f952305",
          },
        }
      );

      dispatch({ type: GET_HISTORY_COIN, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getInformationMartketCap = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(coinRanking.URL, coinRanking.headers);
      dispatch({ type: GET_INFORMATION_MARKET_CAP, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};
