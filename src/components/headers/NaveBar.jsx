import React from "react";

function NaveBar() {
  return (
    <header className="flex justify-between p-3 bg-amber-100">
      <h1 className="text-2xl px-6">MoviesLibrary</h1>
      <nav className="flex items-center w-fit gap-3 px-7">
        <ul className="flex gap-3">
          <li> Popular</li>
          <li>Top Rated</li>
          <li>Upcomming</li>
        </ul>
        <div className="flex gap-2 ">
          <input type="search" name="" id="" />
          <button className=" bg-slate-300 p-1 px-2 rounded" type="submit">
            search
          </button>
        </div>
      </nav>
    </header>
  );
}

export default NaveBar;
