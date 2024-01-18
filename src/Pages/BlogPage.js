import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
// import { baseUrl } from "../baseUrl";
import Header from "../components/Header";
import BlogDetail from "../components/BlogDetail";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);

  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log(error);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);
  const { darkMode } = useContext(AppContext);
  return (
    <div
      className={`max-w-2xl w-11/12 py-3 flex flex-col mx-auto gap-y-7 my-[100px] ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      <Header></Header>
      <div className="flex items-center w-11/12 max-w-2xl">
        <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigation(-1)}>Back</button>
      </div>
      {loading ? (
        <p>Loading!</p>
      ) : blog ? (
        <div>
          <BlogDetail post={blog}></BlogDetail>
          <h2 className="text-xl mt-7 mb-2 font-serif font-semibold text-blue-700">Related Blogs</h2>
          {relatedBlogs.map((post) => (
            <div key={post.id}>
              <BlogDetail post={post}></BlogDetail>
            </div>
          ))}
        </div>
      ) : (
        <p>No blog found</p>
      )}
    </div>
  );
};

export default BlogPage;
