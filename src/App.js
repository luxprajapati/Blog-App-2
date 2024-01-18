import React, { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";

const App = () => {
  const { fetchBlogPost } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      // it means we want to search by tag
      const tag = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPost(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPost(Number(page), null, category);
    } else {
      fetchBlogPost(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/blog/:blogId" element={<BlogPage></BlogPage>} />
      <Route path="/tags/:tag" element={<TagPage></TagPage>} />
      <Route
        path="/categories/:category"
        element={<CategoryPage></CategoryPage>}
      />
    </Routes>
  );
};

export default App;
