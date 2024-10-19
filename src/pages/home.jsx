import axios from "axios";
import React, { useEffect, useState } from "react";
import MoviePreview from "../components/MoviePreview";

function Home() {
  const [movies, setMovies] = useState("");
  const [page, setPage] = useState(1);
  console.log("api-key", import.meta.env.VITE_API_KEY);
  useEffect(() => {
    async function fetchmovies() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${
            import.meta.env.VITE_API_KEY
          }&language=en-US&page=${page}`
        );

        setMovies(response.data);
      } catch (error) {}
    }

    fetchmovies();
    return () => {};
  }, [page]);
  // console.log(movies);
  console.log(page);
  const moveToPage = (e) => {
    if (e === "next" && page <= movies.total_pages) {
      setPage((prev) => prev + 1);
    } else {
      setPage((prev) => prev - 1);
    }
  };
  return (
    <main className="m-auto">
      <div className="flex flex-wrap gap-7 my-10 justify-center">
        {" "}
        {movies?.results?.map((info) => {
          return (
            <MoviePreview key={info.id} className="w-[15rem]" info={info} />
          );
        })}
      </div>
      <div className=" flex gap-1 m-4 overflow-x-auto px-12 ">
        {page > 1 && (
          <span
            onClick={() => moveToPage("prev")}
            className="border mx-1 px-3 py-1 absolute left-0 z-10 bg-white cursor-pointer"
          >
            prev
          </span>
        )}
        {[...Array(movies.total_pages)].map((_, idx) => {
          return (
            <span
              key={idx}
              onClick={() => {
                setPage(idx + 1);
              }}
              className={`border px-3 py-1 cursor-pointer ${
                page === idx + 1 ? "bg-slate-200" : ""
              }`}
            >
              {idx + 1}
            </span>
          );
        })}
        {page !== movies.total_pages && (
          <span
            onClick={() => moveToPage("next")}
            className="border px-3 py-1 absolute right-0 z-10 bg-white cursor-pointer"
          >
            next
          </span>
        )}
      </div>
    </main>
  );
}

export default Home;
