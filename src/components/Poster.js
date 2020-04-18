import React from "react";
import { Link } from "react-router-dom";
import FavButton from "./FavButton";
import WatchLaterButton from "./WatchLaterButton";
import "../styles/_poster.scss";

const Poster = ({ movie }) => {
  return (
    <div key={movie.id} className="poster">
      <div className="posterimg">
        <Link to={"/movie/" + movie.id}>
          <img src={movie.poster_path} alt={movie.title} />
        </Link>
      </div>
      {/* <div className="poster-title"><h2>{movie.title}</h2></div> */}
      {/* <FavButton movie={movie} />
      <WatchLaterButton movie={movie} /> */}
    </div>
  );
};

export default Poster;
