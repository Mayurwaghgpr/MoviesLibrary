import React, { memo } from "react";

function MoviePreview({ info, className }) {
  return (
    <article className={className}>
      <div className="w-full bg-slate-200 min-h-[80%]">
        {" "}
        <img
          className="w-full h-full"
          src={import.meta.env.VITE_BASE_DOMAIN + info.poster_path}
          alt={info.title}
        />
      </div>{" "}
      <div className="px-1">
        {" "}
        <p>{info.title}</p>
        <small>{info.vote_average}</small>
      </div>
    </article>
  );
}

export default memo(MoviePreview);
