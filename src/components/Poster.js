import React from "react";
import { Link } from "react-router-dom";
import FavButton from "./FavButton";
import WatchLaterButton from "./WatchLaterButton";

const Poster = (props) => {
  return (
    <div key={props.movie.id} className="poster">
      <div className="posterimg">
        <Link to={"/movie/" + props.movie.id}>
          {props.movie.poster_path.includes("null") ? (
            <h2 id="no-poster">{props.movie.title}</h2>
          ) : (
            <img src={props.movie.poster_path} alt={props.movie.title} />
          )}
        </Link>
      </div>
      <div className="poster-btns">
        <FavButton movie={props.movie} />
        <WatchLaterButton movie={props.movie} />
      </div>
    </div>
  );
};

export default Poster;
