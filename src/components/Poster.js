import React from "react";
import { Link } from "react-router-dom";
import FavButton from "./FavButton";
import WatchLaterButton from "./WatchLaterButton";

const Poster = (props) => {
  return (
    <div key={props.movie.id} className="poster">
      <h2>{props.movie.trailer_id}</h2>
      <div className="posterimg">
        <Link to={"/movie/" + props.movie.id}>
          <img src={props.movie.poster_path} alt={props.movie.title} />
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
