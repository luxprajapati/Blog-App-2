import React from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const {darkMode} = useContext(AppContext);
  return (
    <div
      className={`w-full h-full flex flex-col items-center  justify-center gap-x-1 ${
        darkMode ? "bg-slate-900" : "bg-white"
      }`}
    >
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  );
};

export default Home;
