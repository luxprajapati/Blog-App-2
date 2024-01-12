import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, nextPageHandler, totalPages, darkMode } =
    useContext(AppContext);
  return (
    <div
      className={`fixed bottom-0 inset-x-0 py-2 border-t-2 font-serif border-t-gray-300
     w-full ${darkMode ? "bg-slate-900" : "bg-white"}`}
    >
      <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
        {page > 1 && (
          <button
            className={`border-2 border-gray-300 py-1 px-4 rounded-md ${
              darkMode ? "text-white" : "text-black"
            }`}
            onClick={() => nextPageHandler(page - 1)}
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            className={`border-2 border-gray-300 py-1 px-4 rounded-md ${
              darkMode ? "text-white" : "text-black"
            }`}
            onClick={() => nextPageHandler(page + 1)}
          >
            Next
          </button>
        )}

        <p
          className={`text-sm font-semibold ml-auto ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
