import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
// Step 1: Create the context
 export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  // Data filling is pending
  async function fetchBlogPost(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`; // baseUrl is coming from baseUrl.js file
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
      // here we're resetting the state to the initial state
      setPage(1);
      setTotalPages(null);
      setPosts([]);
    }
    setLoading(false);
  }

  function nextPageHandler(page) {
    setPage(page);
    fetchBlogPost(page);
  }

  function darkModeHandler(value) {
    setDarkMode((value)=> !value);
  }

  // We're creating an object in which we have passed all the values that we want to share with the components that are wrapped inside the AppContextProvider component. [In short these all is the data which we want to pass to consumer]
  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    nextPageHandler,
    fetchBlogPost,
    darkMode,
    setDarkMode,
    darkModeHandler,
  };

  // step 2: Pass the value to the provider
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContextProvider };

