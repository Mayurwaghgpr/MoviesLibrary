import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieDetailHeader from "../components/headers/MovieDetailHeader";
import CastDetails from "../components/CastDetails";

function MovieDetails() {
  return (
    <main className="my-5 mx-10">
      <MovieDetailHeader />
      <CastDetails />
    </main>
  );
}

export default MovieDetails;
