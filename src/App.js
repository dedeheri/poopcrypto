import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// components
import Cointainer from "./Components/Cointainer";
import Navbar from "./Components/Navbar";

// pages
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import { useDispatch } from "react-redux";
import { getInformationMartketCap } from "./Content/Action/Coin";
import Footer from "./Components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInformationMartketCap());
  }, []);

  return (
    <Fragment>
      <div className={darkMode ? "dark" : "light"}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Nav />
        <Cointainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cryptocurrencies/:id" element={<Detail />} />
          </Routes>
        </Cointainer>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
