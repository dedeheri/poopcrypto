import React from "react";

import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="border-b dark:border-gray-800 font-roboto bg-white dark:bg-[#202020] bg-gray-100 px-2 md:px-0">
      <div className="max-w-7xl mx-auto flex h-10 items-center justify-between px-3">
        <h1 className="dark:text-white text-black">Build By Dede Heri</h1>
        <a href="https://github.com/dedeheri/poopcrypto" target="_blank">
          <AiFillGithub
            fontSize={26}
            className="dark:text-white cursor-pointer text-black hover:opacity-80"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
