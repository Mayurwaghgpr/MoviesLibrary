import React, { memo } from "react";

function MoviePreview({ info, className }) {
  return (
    <article className={className}>
      <img
        className="w-fit"
        src={import.meta.env.VITE_BASE_DOMAIN + info.poster_path}
        alt={info.title}
      />{" "}
      <p>{info.title}</p>
      <small>{info.vote_average}</small>
    </article>
  );
}

export default memo(MoviePreview);
