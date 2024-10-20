import React, { useCallback, useContext, useEffect, useRef } from "react";

function Pagination({ totalPages, page, setPage }) {
  const moveToPage = (e) => {
    console.log({ e });
    if (e === "next" && page <= totalPages) {
      setPage((prev) => prev + 1);
    } else {
      setPage((prev) => prev - 1);
    }
  };
  return (
    <div className="relative flex m-10 sm:w-[40rem] w-full">
      {page > 1 && (
        <span
          onClick={() => moveToPage("prev")}
          className="border mx-1 px-3 py-1 absolute left-0 z-10 rounded-full b bg-gray-300 cursor-pointer"
        >
          prev
        </span>
      )}
      <div className="flex gap-1 overflow-x-auto mx-[4.2rem]  ">
        {" "}
        {[...Array(totalPages)].map((_, idx) => {
          return (
            <span
              key={idx}
              onClick={() => {
                setPage(idx + 1);
              }}
              className={`border px-3 py-1 rounded-full  cursor-pointer ${
                page === idx + 1 ? "bg-slate-200" : ""
              }`}
            >
              {idx + 1}
            </span>
          );
        })}
      </div>

      {page !== totalPages && (
        <span
          onClick={() => moveToPage("next")}
          className="border px-3 py-1 absolute right-0 z-10 rounded-full bg-gray-300 cursor-pointer"
        >
          next
        </span>
      )}
    </div>
  );
}

export default Pagination;
