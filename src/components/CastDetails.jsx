import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function CastDetails() {
  const [castdetail, setDetail] = useState();
  const { pathname } = useLocation();
  useEffect(() => {
    async function fetchMoviesDetail() {
      const movie_id = pathname.split("/")[2];
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${
            import.meta.env.VITE_API_KEY
          }&language=en-US`
        );
        setDetail(response.data);
      } catch (error) {}
    }
    fetchMoviesDetail();
  }, []);
  console.log(castdetail);
  return (
    <>
      {" "}
      <h1 className="text-4xl px-5 ">CAST</h1>
      <div className=" flex gap-20 text-wrap drop-shadow-2xl  justify-center bg-gray-800 my-5 rounded-lg  p-8 flex-wrap h-[30rem] overflow-y-auto">
        {castdetail?.cast.map(
          (actor) =>
            actor?.profile_path != null && (
              <div
                className="  *:text-white  gap-1 flex text-wrap w-[16rem]  flex-col "
                key={actor.credit_id}
              >
                <div className=" relative h-[10rem] w-[10rem] rounded-full ">
                  {" "}
                  <img
                    className="w-full h-full rounded-full object-cover object-center"
                    src={import.meta.env.VITE_BASE_DOMAIN + actor.profile_path}
                    alt={actor.name}
                  />
                </div>
                <h1> Name : {actor.name}</h1>
                <h2> Character : {actor.character}</h2>
              </div>
            )
        )}
      </div>
    </>
  );
}

export default CastDetails;
