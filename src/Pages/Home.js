import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "../Components/Main";
import { getCoins, getInformationMartketCap } from "../Content/Action/Coin";

import { TailSpin } from "react-loader-spinner";
const Home = () => {
  const {
    get: { coins, loading },
  } = useSelector((state) => state.coin);

  // Call API
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoins());
    dispatch(getInformationMartketCap());
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <TailSpin heigth="50" width="50" color="grey" ariaLabel="loading" />
      </div>
    );

  return <div className="pt-6 w-full">{<Main coins={coins} />}</div>;
};

export default Home;
