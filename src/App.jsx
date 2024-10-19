import { useCallback, useContext, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NaveBar from "./components/headers/NaveBar";
import MoviesLists from "./pages/MoviesLists";

function App() {
  return (
    <>
      <NaveBar />{" "}
      <Routes>
        <Route path="/" element={<MoviesLists />} />
        <Route path="/top_rated" element={<MoviesLists />} />
        <Route path="/upcoming" element={<MoviesLists />} />
      </Routes>
    </>
  );
}

export default App;
