import React from "react";

const Container = ({ children }) => {
  return (
    <div className="bg-white dark:bg-[#181818] h-min-screen font-roboto">
      <div className="max-w-7xl mx-auto px-4 md:px-3 text-black dark:text-white">
        {children}
      </div>
    </div>
  );
};

export default Container;
