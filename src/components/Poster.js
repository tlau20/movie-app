import React from "react";
import { Link } from "react-router-dom";
import FavButton from "./FavButton";
import WatchLaterButton from "./WatchLaterButton";

const Poster = ({ movie }) => {
  return (
    <div key={movie.id} className="poster">
      <Link to={"/movie/" + movie.id}>
        <img src={movie.poster_path} alt={movie.title} />
      </Link>
      <FavButton movie={movie} />
      <WatchLaterButton movie={movie} />
    </div>
  );
};

export default Poster;
