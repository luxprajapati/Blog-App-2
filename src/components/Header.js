import React, { useContext } from "react";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { darkMode, darkModeHandler } = useContext(AppContext);

  return (
    <div
      className={`py-4 border-b-2 flex justify-center font-serif border-b-gray-300  fixed top-0 inset-x-0 ${
        darkMode
          ? " bg-slate-900 shadow-sm shadow-slate-300 text-white"
          : "bg-white shadow-md  text-black"
      }`}
    >
      <h1
        className={`font-bold text-3xl text-center text-violet-800 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Lux-BLOGS
      </h1>

      {/* Dark Mode btn code */}
      <div className="absolute right-8 mt-1">
        {darkMode ? (
          <MdOutlineDarkMode
            onClick={() => darkModeHandler()}
            className=" cursor-pointer  text-2xl"
          ></MdOutlineDarkMode>
        ) : (
          <MdDarkMode
            onClick={() => darkModeHandler()}
            className="cursor-pointer text-2xl"
          ></MdDarkMode>
        )}
      </div>
    </div>
  );
};

export default Header;
