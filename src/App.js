import React, { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";

// components
import Cointainer from "./Components/Cointainer";
import Navbar from "./Components/Navbar";

// pages
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import Exchanges from "./Pages/Exchanges";
import Cryptocurrencies from "./Pages/Cryptocurrencies";
import News from "./Pages/News";
import Nav from "./Components/Nav";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Fragment>
      <div className={darkMode ? "dark" : "light"}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Nav />
        <Cointainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cryptocurrencies/:id" element={<Detail />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </Cointainer>
      </div>
    </Fragment>
  );
}

export default App;
