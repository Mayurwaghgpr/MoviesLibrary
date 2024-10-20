import { createContext, useState } from "react";

import React from "react";
export const MoviesContext = createContext();

function MoviesContextProvider({ children }) {
  const [movies, setMovies] = useState("");
  return (
    <MoviesContext.Provider value={[movies, setMovies]}>
      {children}
    </MoviesContext.Provider>
  );
}

export default MoviesContextProvider;
