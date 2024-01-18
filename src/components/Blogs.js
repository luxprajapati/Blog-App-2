import React, { useContext } from "react";
import { AppContext } from "../context/AppContext.js";
import Spinner from "./Spinner";
import BlogDetail from "./BlogDetail.js";

const Blogs = () => {
  // consuming the context
  const { loading, posts, darkMode } = useContext(AppContext);
  return (
    <div
      className={`max-w-2xl w-11/12 py-3 flex flex-col gap-y-7 my-[100px] ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      {loading ? (
        <Spinner></Spinner>
      ) : posts.length === 0 ? (
        <div>
          <h1>No blogs to show</h1>
        </div>
      ) : (
        posts.map((post) => <BlogDetail key={post.id} post={post}></BlogDetail>)
      )}
    </div>
  );
};

export default Blogs;
