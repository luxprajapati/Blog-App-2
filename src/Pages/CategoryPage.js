import React from "react";
import Header from "../components/Header";
import { useNavigate, useLocation } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div className="flex flex-col justify-center items-center">
      <Header></Header>
      <div className="mt-[100px] flex items-baseline  mb-[-90px]">
        <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigation(-1)}>Back</button>
        <h2 className="ml-2 text-2xl font-serif">
          Blogs on <span className="font-extrabold text-blue-700 italic">#{category}</span>
        </h2>
      </div>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  );
};

export default CategoryPage;
