import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function MovieDetailHeader() {
  const [moviedetail, setDetail] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    async function fetchMoviesDetail() {
      const movie_id = pathname.split("/")[2];
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${
            import.meta.env.VITE_API_KEY
          }&language=en-US`
        );
        setDetail(response.data);
      } catch (error) {}
    }
    fetchMoviesDetail();
  }, []);
  return (
    <div className="relative flex sm:flex-row flex-col  gap-3 sm:h-[35rem] p-10 my-5 rounded-lg bg-gray-800 overflow-hidden">
      {" "}
      <a
        href={moviedetail?.homepage}
        className="relative sm:h-[15rem] bg-green-500 z-10"
      >
        <img
          className=" h-full w-full object-cover object-center"
          src={import.meta.env.VITE_BASE_DOMAIN + moviedetail?.poster_path}
          alt={moviedetail?.title}
          loading="lazy"
        />
      </a>
      <div className="w-full flex flex-col justify-between gap-3  sm:px-10 z-10 ">
        <div className=" text-center *:text-white  ">
          <h1 className="text-3xl">{moviedetail?.title}</h1>
          <sub>{moviedetail?.tagline}</sub>
        </div>

        <div className=" flex gap-2 text-xl font-light justify-start flex-col h-full *:text-white ">
          <h3 className=" ">Rating : {moviedetail?.vote_average}</h3>
          <h4>runtime : {moviedetail?.runtime}</h4>
          <div className="flex gap-2 items-center *:text-white ">
            <label> genres : </label>
            {moviedetail?.genres.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
          <div className="flex *:text-white">
            <label>country : </label>
            {moviedetail?.origin_country.map((country, idx) => (
              <h5 key={idx}>{country}</h5>
            ))}
          </div>
        </div>
        <div className=" lg:w-[60%] my-10 *:text-white ">
          <h2 className=" sm:text-4xl text-3xl my-2 ">Overview</h2>
          <p className=" text-wrap">{moviedetail?.overview}</p>
        </div>
      </div>
      <div className="*:text-white flex gap-3 absolute right-0 bottom-0 m-4">
        {" "}
        {moviedetail?.spoken_languages.map((lang) => (
          <p key={lang.name}>{lang.name}</p>
        ))}
      </div>
      <div className="right-0 h-full w-1/2 top-0 absolute ">
        <img
          className="h-full w-fit object-cover object-top mix-blend-lighten"
          src={import.meta.env.VITE_BASE_DOMAIN + moviedetail?.backdrop_path}
          alt={moviedetail?.title}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default MovieDetailHeader;
