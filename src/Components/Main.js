import React from "react";

import formatToIDR from "../Utils/formatToIDR";
import formatToPercentage from "../Utils/formatToPercentage";

import { useNavigate } from "react-router-dom";

const Main = ({ coins }) => {
  const columns = [
    "Rank",
    "Nama",
    "Harga",
    "24j %",
    "Kap Pasar",
    "Kap Pasar 24j",
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
          <tr className="border-t border-b dark:border-slate-800 h-10 font-medium">
            {columns.map((column, i) => (
              <th
                key={i}
                className="whitespace-nowrap text-md py-3 px-3 text-left"
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
          {coins?.slice(0, 20).map((coin) => (
            <tr
              key={coin.id}
              className="hover:dark:bg-[#202020] hover:bg-gray-100 border-t border-b dark:border-slate-800 h-14"
            >
              <td className="text-md whitespace-nowrap px-3 p-1">
                {coin.market_cap_rank}
              </td>
              <td
                onClick={() => router(coin.id)}
                className="w-1 cursor-pointer "
              >
                <div className="flex items-center px-2 space-x-2">
                  <img className="w-6" src={coin.image} />
                  <p className="text-md whitespace-nowrap ">{coin.name}</p>
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
              <td className="text-md whitespace-nowrap px-3 p-1">
                {formatToIDR(coin.market_cap)}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {formatToIDR(coin.market_cap_change_24h)}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {coin.circulating_supply.toLocaleString("en-US")}{" "}
                {coin.symbol.toUpperCase()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
