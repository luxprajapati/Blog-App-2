import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
const App = () => {
  const { fetchBlogPost, darkMode } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

export default App;
