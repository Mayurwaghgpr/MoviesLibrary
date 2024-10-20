import React, { useContext, useEffect, useState } from "react";
import { v4 } from "uuid";
import { Link, useSearchParams } from "react-router-dom";
import { MoviesContext } from "../../context/moviesContextProvider";
import axios from "axios";

function NaveBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovies = (el) => {
    el.preventDefault();
    const searchData = new FormData(el.target);
    const { search } = Object.fromEntries(searchData);
    setSearchParams({ search });
  };

  const LinksConstant = [
    { id: v4(), lName: "Popular", url: "/" },
    { id: v4(), lName: "Top Rated", url: "/top_rated" },
    { id: v4(), lName: "Upcoming", url: "/upcoming" },
  ];
  return (
    <header className="flex sm:flex-row flex-col justify-between p-5 gap-2 bg-amber-100">
      <h1 className="text-2xl px-6">MoviesLibrary</h1>
      <nav className="flex items-center sm:flex-row flex-col gap-7 px-7">
        <ul className="flex w-full gap-3">
          {LinksConstant.map((link) => (
            <li key={link.id}>
              <Link to={link.url}>{link.lName}</Link>
            </li>
          ))}
        </ul>
        <form onSubmit={searchMovies} className="flex w-full gap-2">
          <input className="w-full p-2" type="search" name="search" id="" />
          <button className="bg-slate-300 p-1 px-2 rounded" type="submit">
            Search
          </button>
        </form>
      </nav>
    </header>
  );
}

export default NaveBar;
