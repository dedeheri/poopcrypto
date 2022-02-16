import React from "react";
import { useSelector } from "react-redux";

import formatToIDR from "../Utils/formatToIDR";
const Nav = () => {
  const {
    get: { data, loading },
  } = useSelector((state) => state.marketCap);

  if (loading) return "loading...";
  return (
    <div className=" font-roboto bg-gray-100 dark:bg-[#202020] px-2 ">
      <div className="max-w-7xl mx-auto py-1">
        <div className="flex space-x-6 text-black dark:text-white overflow-x-scroll whitespace-nowrap scrollbar-hide ">
          <h1>
            Mata Uang Kripto:{" "}
            <span>{formatToIDR(data?.stats?.totalCoins)}</span>
          </h1>
          <h1>
            Kap Pasar: <span>{formatToIDR(data?.stats?.totalMarkets)}</span>
          </h1>
          <h1>
            Volume 24j: <span>{formatToIDR(data?.stats?.total24hVolume)}</span>
          </h1>
          <h1>
            Total Market:{" "}
            <span>{formatToIDR(data?.stats?.totalMarketCap)}</span>
          </h1>
          <h1>
            Bursa: <span>{formatToIDR(data?.stats?.totalExchanges)}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Nav;
