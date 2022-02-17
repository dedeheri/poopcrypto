import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "../Components/Main";
import { getCoins } from "../Content/Action/Coin";

import { TailSpin } from "react-loader-spinner";
const Home = () => {
  const {
    get: { coins, loading },
  } = useSelector((state) => state.coin);

  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [limit, setLimit] = useState(50);

  // Call API
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoins(currency, page, limit));
  }, [limit]);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // setLoadingScroll(true);
    if (offset >= document.body.offsetHeight - window.innerHeight) {
      setLimit(limit + 50);
    }
  }, [offset, limit]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <TailSpin heigth="50" width="50" color="grey" ariaLabel="loading" />
      </div>
    );

  return (
    <div className="pt-6">{<Main coins={coins} currency={currency} />}</div>
  );
};

export default Home;
