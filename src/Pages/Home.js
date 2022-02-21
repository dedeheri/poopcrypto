import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "../Components/Main";
import { getCoins } from "../Content/Action/Coin";

import { TailSpin } from "react-loader-spinner";
import { LOADING_PERSIZE_COIN_COIN } from "../Content/Action/Action-Types";
const Home = () => {
  const {
    loadingPerZise,
    get: { coins, loading },
  } = useSelector((state) => state.coin);

  const [limit, setLimit] = useState(50);

  console.log(coins);

  // Call API
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoins("usd", 1, limit));

    return () => dispatch({ type: LOADING_PERSIZE_COIN_COIN });
  }, [limit]);

  console.log(loadingPerZise);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <TailSpin heigth="50" width="50" color="grey" ariaLabel="loading" />
      </div>
    );

  return (
    <div className="py-10">
      <Main coins={coins} loadingPerZise={loadingPerZise} />
      <div className="flex justify-end space-x-2">
        {coins?.length + 1 > 100 ? (
          <h1
            onClick={() => setLimit(limit - 50)}
            className="bg-gray-200 dark:bg-[#252525] dark:text-white text-black mt-5 p-2 px-3 rounded-lg cursor-pointer hover:bg-opacity-60"
          >
            Lebih Sedikit
          </h1>
        ) : null}

        {coins?.length + 1 > 50 ? (
          <h1
            onClick={() => setLimit(limit + 50)}
            className="bg-gray-200 dark:bg-[#252525] dark:text-white text-black mt-5 p-2 px-3 rounded-lg cursor-pointer  hover:bg-opacity-60"
          >
            Lebih banyak
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
