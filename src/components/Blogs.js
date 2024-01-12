import React, { useContext } from "react";
import { AppContext } from "../context/AppContext.js";
import Spinner from "./Spinner";

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
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-sm ">{post.title}</p>
            <p className="text-[14px]">
              By <span className="italic">{post.author}</span> on{" "}
              <span className="font-semibold underline">{post.category}</span>
            </p>
            <p className="text-[14px]">Posted on {post.date}</p>
            <p className="text-[16px] mt-[13px]">{post.content}</p>
            <p className="flex flex-wrap gap-x-2 items-center">
              {post.tags.map((tag, index) => {
                return (
                  <span
                    className={`text-xs font-semibold font-serif underline cursor-pointer ${
                      darkMode ? "text-slate-500" : "text-blue-700 "
                    }`}
                    key={index}
                  >
                    #{tag}
                  </span>
                );
              })}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
