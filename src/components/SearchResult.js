import React from "react";
import { Link } from "react-router-dom";

const SearchResult = (props) => {
  return (
    <Link to={"/movie/" + props.movie.id} className="search-result">
      <div className="result-poster">
        {props.movie.poster_path && props.movie.poster_path.includes("null") ? (
          <div className="result-no-poster">
            <h2>No poster</h2>
          </div>
        ) : (
          <img src={props.movie.poster_path} alt={props.movie.title} />
        )}
      </div>
      <div className="result-details">
        <div className="result-title">
          <h2>{props.movie.title}</h2>
        </div>
        <div className="result-year">
          <h2>
            {props.movie.release_date
              ? props.movie.release_date.substring(
                  0,
                  props.movie.release_date.indexOf("-")
                )
              : "(N/A)"}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default SearchResult;
