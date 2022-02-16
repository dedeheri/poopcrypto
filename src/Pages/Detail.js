import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { getDetailCoin, getHistoryCoin } from "../Content/Action/Coin";

import formatToIDR from "../Utils/formatToIDR";

import { ImFacebook } from "react-icons/im";
import { FiGithub } from "react-icons/fi";
import { BiLinkAlt } from "react-icons/bi";
import { HiHashtag } from "react-icons/hi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import formatToPercentage from "../Utils/formatToPercentage";

import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import {
  REMOVE_DETAIL_COIN,
  REMOVE_GET_HISTORY_COIN,
} from "../Content/Action/Action-Types";
import { TailSpin } from "react-loader-spinner";
import News from "../Components/News";
Chart.register(...registerables);

const Detail = () => {
  const dispatch = useDispatch();
  const {
    detail: { coin, error, loading },
    history: { timestamps, loading: loadingHistory },
  } = useSelector((state) => state.coin);
  const {
    image,
    name,
    market_cap_rank,
    symbol,
    links,
    hashing_algorithm,
    categories,
    market_data,
    description,
  } = coin;

  const [days, setDays] = useState(1);

  // call api
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailCoin(id));
  }, [days]);

  useEffect(() => {
    dispatch(getHistoryCoin(id, days));
  }, [days]);

  // remove detail
  useEffect(() => {
    return () => {
      dispatch({ type: REMOVE_DETAIL_COIN });
      dispatch({ type: REMOVE_GET_HISTORY_COIN });
    };
  }, [days]);

  const timestamp = [];
  const price = [];

  for (let i = 0; i < timestamps?.prices?.length; i++) {
    timestamp.push(new Date(timestamps.prices[i][0]).toDateString("id"));
    price.push(timestamps.prices[i][1]);
  }

  const dataCharts = {
    labels: timestamp,
    datasets: [
      {
        label: name,
        data: price,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
        fill: false,
      },
    ],
  };

  const [more, setMore] = useState(true);
  const trancute = (des) => {
    if (more) {
      return des.length > 500 ? des.substring(0, 500) + "....." : des;
    } else {
      return des;
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <TailSpin heigth="50" width="50" color="grey" ariaLabel="loading" />
      </div>
    );

  return (
    <div className="pt-10">
      <div className="md:flex md:justify-between">
        {/* left */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <img src={image?.small} alt={name} className="w-10" />
            <h1 className="text-4xl font-bold text-black dark:text-white">
              {name}
            </h1>
            <h1 className="text-lg font-semibold text-black dark:text-white bg-gray-100 dark:bg-[#252525] px-2 rounded-md">
              {symbol?.toUpperCase()}
            </h1>
            <h1 className="text-lg font-semibold text-black dark:text-white bg-gray-100 dark:bg-[#252525] px-2 rounded-md">
              Peringkat #{market_cap_rank}
            </h1>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-2 items-center gap-2">
            <a
              href={`https://web.facebook.com/${links?.facebook_username}`}
              target="_blank"
              className="text-lg flex items-center font-semibold text-black dark:text-white bg-gray-100 dark:bg-[#252525] px-2 rounded-md"
            >
              <ImFacebook />
              <span className="ml-2">{links?.facebook_username}</span>
            </a>

            <a
              href={links?.repos_url?.github[0]}
              target="_blank"
              className="text-lg flex items-center font-semibold text-black dark:text-white bg-gray-100 dark:bg-[#252525] px-2 rounded-md"
            >
              <FiGithub />
              <span className="ml-2">{name}</span>
            </a>

            <a
              href={links?.homepage[0]}
              target="_blank"
              className="text-lg flex items-center font-semibold text-black dark:text-white bg-gray-100 dark:bg-[#252525] px-2 rounded-md"
            >
              <BiLinkAlt />
              <span className="ml-2">{name}</span>
            </a>

            <div
              target="_blank"
              className="text-lg flex items-center font-semibold text-black dark:text-white bg-gray-100 dark:bg-[#252525] px-2 rounded-md"
            >
              <HiHashtag />
              <span className="ml-2">{hashing_algorithm}</span>
            </div>
          </div>

          <div>
            <h1 className="text-black dark:text-white text-sm font-semibold">
              Katagori
            </h1>
            <p className="text-lg font-semibold w-36 mt-2 text-black dark:text-white bg-gray-100 dark:bg-[#252525] px-2 rounded-md">
              {categories?.[0]}
            </p>
          </div>
        </div>

        {/* right */}
        <div className=" mt-8 md:mt-0">
          <div className="space-y-1">
            <h2 className="text-black dark:text-white text-medium">
              Harga {name}
            </h2>
            <div className="flex items-center space-x-2">
              <h1 className="text-black dark:text-white text-2xl">
                {formatToIDR(market_data?.current_price?.usd)}{" "}
              </h1>
              <p
                className={`text-sm bg-gray-100 font-semibold dark:bg-[#252525] px-2 py-1 rounded-md ${
                  market_data?.price_change_percentage_24h_in_currency?.usd < 0
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {formatToPercentage(
                  market_data?.price_change_percentage_24h_in_currency?.usd
                )}
              </p>
            </div>
          </div>
          <div className="md:space-x-10 md:flex">
            <div className="space-y-1">
              <h2 className="text-black dark:text-white text-medium">
                Kap Pasar
              </h2>
              <h1 className="text-black dark:text-white text-xl">
                {formatToIDR(market_data?.market_cap?.usd)}
              </h1>
            </div>

            <div className="space-y-1">
              <h2 className="text-black dark:text-white text-medium">
                Peredaran Suplai
              </h2>
              <h1 className="text-black dark:text-white text-xl">
                {formatToIDR(market_data?.circulating_supply)}
              </h1>
            </div>

            {market_data?.max_supply && (
              <div className="space-y-1">
                <h2 className="text-black dark:text-white text-medium">
                  Total Suplai
                </h2>
                <h1 className="text-black dark:text-white text-xl">
                  {market_data?.max_supply?.toLocaleString("en-US")}
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-10">
        <div className="col-span-3">
          <div className="bg-gray-100 text-black dark:text-white dark:bg-[#252525] flex h-8 w-36 space-x-2 rounded-lg py-1 px-2">
            <p
              onClick={() => setDays(1)}
              className={` dark:hover:bg-[#515151]  px-2 cursor-pointer rounded-lg font-semibold ${
                days == 1 ? " dark:bg-[#515151] bg-gray-300" : ""
              }`}
            >
              1H
            </p>
            <p
              onClick={() => setDays(7)}
              className={` dark:hover:bg-[#515151]  px-2 cursor-pointer rounded-lg font-semibold ${
                days == 7 ? " dark:bg-[#515151] bg-gray-300" : ""
              }`}
            >
              7H
            </p>
            <p
              onClick={() => setDays(365)}
              className={` dark:hover:bg-[#515151]  px-2 cursor-pointer rounded-lg font-semibold ${
                days == 365 ? " dark:bg-[#515151] bg-gray-300" : ""
              }`}
            >
              1T
            </p>
          </div>
          {loadingHistory ? (
            <div className="flex justify-center items-center">
              <TailSpin
                heigth="50"
                width="50"
                color="grey"
                ariaLabel="loading"
              />
            </div>
          ) : (
            <Line data={dataCharts} />
          )}
        </div>
        <div className="bg-gray-100 dark:bg-[#252525] p-3 rounded-lg space-y-5">
          <h1 className="font-semibold text-xl border-b dark:border-gray-700">
            {name} Statistik
          </h1>
          <div>
            <h1 className="font-semibold text-lg">Harga</h1>
            <p>{formatToIDR(market_data?.current_price?.usd)}</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg">24j Tinggi</h1>
            <p>{formatToIDR(market_data?.high_24h?.usd)}</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg">24j Rendah</h1>
            <p>{formatToIDR(market_data?.low_24h?.usd)}</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg">Volume</h1>
            <p>{formatToIDR(market_data?.total_volume?.usd)}</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg">Peringkat Pasar</h1>
            <p>{market_data?.market_cap_rank}</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg">Kap Pasar</h1>
            <p> {formatToIDR(market_data?.market_cap?.usd)}</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg">Kap Pasar</h1>
            <p className="">{formatToIDR(market_data?.circulating_supply)}</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg">Kap Pasar</h1>
            <p>{market_data?.max_supply?.toLocaleString("en-US")}</p>
          </div>
        </div>
      </div>

      <div className="mt-10 ">
        <h1 className="text-2xl font-semibold ">Apa itu ? {name}</h1>
        <div className="mt-2">{trancute(description?.id)}</div>
        {more ? (
          <button
            onClick={() => setMore(false)}
            className="bg-gray-100 dark:bg-[#252525] px-3 py-1 rounded-md mt-4 flex items-center"
          >
            Selengkapnya <MdKeyboardArrowDown fontSize={29} />
          </button>
        ) : (
          <button
            onClick={() => setMore(true)}
            className="bg-gray-100 dark:bg-[#252525] px-3 py-1 rounded-md mt-4 flex items-center"
          >
            Tampilkan Sedikit <MdKeyboardArrowUp fontSize={29} />
          </button>
        )}
      </div>

      {/* news */}
      <div className="mt-10 ">
        <h1 className="text-2xl font-semibold mb-5">Berita Tentang {name}</h1>
        <News slice={4} />
      </div>
    </div>
  );
};

export default Detail;
