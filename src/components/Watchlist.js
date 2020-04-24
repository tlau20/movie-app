import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Poster from "../components/Poster";

const Watchlist = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    let watchlist = JSON.parse(localStorage.getItem("watchlater"));
    if (watchlist) {
      setList(watchlist);
    }
  }, []);

  return (
    <div>
      {list === null ? (
        <div className="empty-list">
          <Link to="/">
            <h2>Your watchlist is empty! Click me to go back to movies</h2>
          </Link>
        </div>
      ) : (
        <div className="movie-grid-wrapper">
          <div className="movie-gallery">
            {list.map((movie) => (
              <Poster key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Watchlist;
