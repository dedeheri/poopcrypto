import React from "react";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";

import formatToIDR from "../Utils/formatToIDR";
const Nav = () => {
  const {
    get: { data, loading },
  } = useSelector((state) => state.marketCap);

  return (
    <div className=" font-roboto border-b dark:border-gray-800 dark:bg-[#202020] px-2 ">
      <div className="max-w-7xl mx-auto py-1">
        <div className="flex space-x-3 text-black dark:text-white overflow-x-scroll whitespace-nowrap scrollbar-hide ">
          {loading ? (
            <div className="flex space-x-4 animate-pulse">
              <p className="dark:bg-slate-600 h-5 w-10 rounded-xl"></p>
              <p className="dark:bg-slate-600 h-5 w-10 rounded-xl"></p>
              <p className="dark:bg-slate-600 h-5 w-10 rounded-xl"></p>
              <p className="dark:bg-slate-600 h-5 w-10 rounded-xl"></p>
              <p className="dark:bg-slate-600 h-5 w-10 rounded-xl"></p>
              <p className="dark:bg-slate-600 h-5 w-10 rounded-xl"></p>
              <p className="dark:bg-slate-600 h-5 w-10 rounded-xl"></p>
              <p className="dark:bg-slate-600 h-5 w-10 rounded-xl"></p>
              <p className="dark:bg-slate-600 h-5 w-10 rounded-xl"></p>
            </div>
          ) : (
            <>
              <h1 className="text-sm">
                Mata Uang Kripto:{" "}
                <span className="text-blue-500 font-semibold">
                  {data?.stats?.totalCoins.toLocaleString("en-US")}
                </span>
              </h1>
              <h1 className="text-sm">
                Kap Pasar:{" "}
                <span className="text-blue-500 font-semibold">
                  {data?.stats?.totalMarkets.toLocaleString("en-US")}
                </span>
              </h1>
              <h1 className="text-sm">
                Volume 24j:{" "}
                <span className="text-blue-500 font-semibold">
                  {formatToIDR(data?.stats?.total24hVolume)}
                </span>
              </h1>
              <h1 className="text-sm">
                Total Market:{" "}
                <span className="text-blue-500 font-semibold">
                  {formatToIDR(data?.stats?.totalMarketCap)}
                </span>
              </h1>
              <h1 className="text-sm">
                Bursa:{" "}
                <span className="text-blue-500 font-semibold">
                  {data?.stats?.totalExchanges.toLocaleString("en-US")}
                </span>
              </h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
