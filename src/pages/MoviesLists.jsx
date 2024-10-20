import axios from "axios";
import React, { useContext, useEffect, useMemo, useState } from "react";
import MoviePreview from "../components/MoviePreview";
import Pagination from "../components/Pagination";
import { useLocation, useSearchParams } from "react-router-dom";
import { MoviesContext } from "../context/moviesContextProvider";
import LoaderScreen from "../components/loader/loaderScreen";
import Error from "../components/Error";

function MoviesLists() {
  const [page, setPage] = useState(1);
  const [isLoding, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const [movies, setMovies] = useContext(MoviesContext); // using React ContextApi to store fetche movies data

  // Using search params to set movie name
  const [searchParams, setSearchParams] = useSearchParams();

  const { pathname } = useLocation();

  const search = searchParams.get("search");

  // movid data fetching
  useEffect(() => {
    setLoading(true);
    async function fetchmovies() {
      try {
        //  conditionaly set url
        const url = search
          ? `https://api.themoviedb.org/3/search/movie?api_key=${
              import.meta.env.VITE_API_KEY
            }&language=en-US&query=${search}&page=${page}`
          : `https://api.themoviedb.org/3/movie${
              pathname === "/" ? "/popular" : pathname
            }?api_key=${
              import.meta.env.VITE_API_KEY
            }&language=en-US&page=${page}`;

        const response = await axios.get(url);
        console.log(response.status);
        if (response.status === 200) {
          setLoading(false);
        }
        setMovies(response.data);
      } catch (error) {
        setError(true);
      }
    }

    fetchmovies();
    return () => {};
  }, [page, pathname, search]);

  return (
    <main className="m-auto flex flex-col items-center">
      {isLoding && <LoaderScreen />}
      {isError && <Error />}
      <div className="flex flex-wrap gap-7 my-10 justify-center">
        {" "}
        {movies?.results?.map((info) => {
          return (
            // Movies preview componenet
            <MoviePreview
              key={info.id}
              className="w-[15rem] flex flex-col gap-2"
              info={info}
            />
          );
        })}
      </div>
      {/* pagination component */}
      <Pagination
        page={page}
        totalPages={movies.total_pages}
        setPage={setPage}
      />
    </main>
  );
}

export default MoviesLists;
