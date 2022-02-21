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
          <button
            onClick={() => router("/")}
            className="flex space-x-2 items-center"
          >
            <FaPoop className="h-5 l-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
              Poopcrypto
            </h1>
          </button>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-2">
          {/* search */}
          {/* <Search /> */}
          {/* toggle dark mode */}
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <MdOutlineWbSunny fontSize={20} className="text-white " />
            ) : (
              <MdOutlineDarkMode fontSize={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
