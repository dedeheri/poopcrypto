import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const Search = ({ ...props }) => {
  const [showInput, setShowInput] = useState(false);
  return (
    <>
      <div className="flex items-center">
        {showInput && (
          <input
            {...props}
            className="border-b dark:border-slate-600 bg-transparent outline-none text-black dark:text-white w-28 mx-3"
            placeholder="Cari"
          />
        )}
        <BiSearch
          onClick={() => setShowInput(!showInput)}
          fontSize={23}
          className="text-black dark:text-white"
        />
      </div>
    </>
  );
};

export default Search;
