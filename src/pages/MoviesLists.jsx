import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MoviePreview from "../components/MoviePreview";
import Pagination from "../components/Pagination";
import { useLocation, useSearchParams } from "react-router-dom";
import { MoviesContext } from "../context/moviesContextProvider";

function MoviesLists() {
  const [movies, setMovies] = useContext(MoviesContext);
  const [page, setPage] = useState(1);
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    async function fetchmovies() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie${
            pathname === "/" ? "/popular" : pathname
          }?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`
        );

        setMovies(response.data);
      } catch (error) {}
    }

    fetchmovies();
    return () => {};
  }, [page, pathname]);
  return (
    <main className="m-auto flex flex-col items-center">
      <div className="flex flex-wrap gap-7 my-10 justify-center">
        {" "}
        {movies?.results?.map((info) => {
          return (
            <MoviePreview
              key={info.id}
              className="w-[15rem] flex flex-col gap-2"
              info={info}
            />
          );
        })}
      </div>
      <Pagination
        page={page}
        totalPages={movies.total_pages}
        setPage={setPage}
      />
    </main>
  );
}

export default MoviesLists;
