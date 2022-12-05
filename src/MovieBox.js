import React from "react";
const API_IMAGE = "https://image.tmdb.org/t/p/w500/";
const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={API_IMAGE + poster_path} alt='not found'></img>
      <p>{overview}</p>
    </div>
  );
};

export default MovieBox;
