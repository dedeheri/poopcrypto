import React from "react";

import formatToIDR from "../Utils/formatToIDR";
import formatToPercentage from "../Utils/formatToPercentage";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { useNavigate } from "react-router-dom";

const Main = ({ coins, loadingPerZise }) => {
  const columns = [
    "Rank",
    "Nama",
    "Harga",
    "24j %",
    "1h %",
    "7h %",
    "Kap Pasar",
    "Peredaran Suplai",
  ];

  const navigate = useNavigate();

  const router = (slug) => {
    navigate({
      pathname: `/cryptocurrencies/${slug}`,
    });
  };

  return (
    <div className="overflow-scroll scrollbar-hide">
      <table className="text-black dark:text-white min-w-full table-fixed">
        <thead>
          <tr className="border-t  border-b dark:border-slate-800 font-medium">
            {columns.map((column, i) => (
              <th
                key={i}
                className="whitespace-nowrap text-md px-3 py-1  text-left"
              >
                {column}
              </th>
            ))}
            <th className="relative">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {coins?.map((coin) => (
            <tr
              key={coin.id}
              className="hover:dark:bg-[#202020] hover:bg-gray-100 border-t border-b dark:border-slate-800 h-14"
            >
              <td className="text-md whitespace-nowrap px-3 p-1 font-semibold">
                # {coin.market_cap_rank}
              </td>
              <td
                onClick={() => router(coin.id)}
                className="w-1 cursor-pointer "
              >
                <div className="flex items-center px-2 space-x-2">
                  <img className="w-6" src={coin.image} />
                  <p className="text-md whitespace-nowrap font-semibold">
                    {coin.name}
                  </p>
                </div>
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {formatToIDR(coin.current_price)}
              </td>
              <td
                className={`text-md whitespace-nowrap px-3 p-1 ${
                  coin.price_change_percentage_24h < 0
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {formatToPercentage(coin.price_change_percentage_24h)}
              </td>
              <td
                className={`text-md whitespace-nowrap px-3 p-1 ${
                  coin.price_change_percentage_1h_in_currency < 0
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {formatToPercentage(
                  coin.price_change_percentage_1h_in_currency
                )}
              </td>
              <td
                className={`text-md whitespace-nowrap px-3 p-1 ${
                  coin.price_change_percentage_7d_in_currency < 0
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {formatToPercentage(
                  coin.price_change_percentage_7d_in_currency
                )}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {formatToIDR(coin.market_cap)}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {coin.circulating_supply.toLocaleString("en-US")}{" "}
                {coin.symbol.toUpperCase()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {loadingPerZise && (
        <>
          <div className="px-3 py-1 flex space-x-3 mt-3 animate-pulse">
            <div className="h-8 w-10 bg-gray-200 dark:bg-[#252525] rounded-md"></div>
            <div className="h-8  bg-gray-200 dark:bg-[#252525] w-1/2 rounded-md"></div>
            <div className="h-8  bg-gray-200 dark:bg-[#252525] w-1/2 rounded-md"></div>
            <div className="h-8  bg-gray-200 dark:bg-[#252525] w-1/2 rounded-md"></div>
            <div className="h-8  bg-gray-200 dark:bg-[#252525] w-1/2 rounded-md"></div>
          </div>
          <div className="px-3 py-1 flex space-x-3 mt-3 animate-pulse">
            <div className="h-8 w-10 bg-gray-200 dark:bg-[#252525] rounded-md"></div>
            <div className="h-8  bg-gray-200 dark:bg-[#252525] w-1/2 rounded-md"></div>
            <div className="h-8  bg-gray-200 dark:bg-[#252525] w-1/2 rounded-md"></div>
            <div className="h-8  bg-gray-200 dark:bg-[#252525] w-1/2 rounded-md"></div>
            <div className="h-8  bg-gray-200 dark:bg-[#252525] w-1/2 rounded-md"></div>
          </div>
          <div className="px-3 py-1 flex space-x-3 mt-3 animate-pulse">
            <div className="h-8 w-10 bg-gray-200 dark:bg-[#252525] rounded-md"></div>
            <div className="h-8  bg-gray-200 dark:bg-[#252525] w-1/2 rounded-md"></div>
            <div className="h-8  bg-gray-200 dark:bg-[#252525] w-1/2 rounded-md"></div>
            <div className="h-8  bg-gray-200 dark:bg-[#252525] w-1/2 rounded-md"></div>
            <div className="h-8  bg-gray-200 dark:bg-[#252525] w-1/2 rounded-md"></div>
          </div>
          <div className="px-3 py-1 flex space-x-3 mt-3 animate-pulse">
            <div className="h-8 w-10 bg-gray-200 dark:bg-[#252525] rounded-md"></div>
            <div className="h-8  bg-gray-200 dark:bg-[#252525] w-1/2 rounded-md"></div>
            <div className="h-8  bg-gray-200 dark:bg-[#252525] w-1/2 rounded-md"></div>
            <div className="h-8  bg-gray-200 dark:bg-[#252525] w-1/2 rounded-md"></div>
            <div className="h-8  bg-gray-200 dark:bg-[#252525] w-1/2 rounded-md"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
