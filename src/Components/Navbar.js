import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

//
import { BiMenu } from "react-icons/bi";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { FaPoop } from "react-icons/fa";
import Search from "./Search";

const activeClassName = "text-md font-semibold link active-link";
const nonActiveClassName = "text-md font-semibold link";

const Navbar = ({ darkMode, setDarkMode }) => {
  const router = useNavigate();
  return (
    <div className="border-b dark:border-gray-800 font-roboto bg-white dark:bg-[#202020] px-2 md:px-0">
      <div className="max-w-7xl mx-auto flex h-14 cursor-pointer justify-between">
        {/* Left */}
        <div className="flex items-center  text-black dark:text-white">
          <button onClick={() => router("/")} className="flex space-x-2">
            <FaPoop className="h-5 w-5 md:h-7 md:l-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />
            <h1 className="text-1xl  md:text-2xl lg:text-3xl xl:text-4xl font-bold">
              Poopcrypto
            </h1>
          </button>
          <div className="hidden pl-16 md:flex space-x-1">
            <NavLink
              to={"/cryptocurrencies"}
              className={({ isActive }) =>
                isActive ? activeClassName : nonActiveClassName
              }
            >
              Mata Uang
            </NavLink>
            <h1 className="text-md font-semibold link">Bursa</h1>
            <h1 className="text-md font-semibold link">Berita</h1>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-2">
          {/* search */}
          <Search />
          {/* toggle dark mode */}
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <MdOutlineWbSunny fontSize={20} className="text-white " />
            ) : (
              <MdOutlineDarkMode fontSize={20} />
            )}
          </button>

          {/* toggle menu */}
          <button className="block md:hidden">
            <BiMenu fontSize={25} className="text-black dark:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
