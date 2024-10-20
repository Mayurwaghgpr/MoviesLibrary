import { useCallback, useContext, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NaveBar from "./components/headers/NaveBar";
import MoviesLists from "./pages/MoviesLists";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <>
      <NaveBar />{" "}
      <Routes>
        <Route path="/" element={<MoviesLists />} />
        <Route path="/top_rated" element={<MoviesLists />} />
        <Route path="/upcoming" element={<MoviesLists />} />
        <Route path="/moviedetail/:movieId" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
