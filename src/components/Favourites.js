import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Poster from "../components/Poster";

const Favourites = () => {
  const [favs, setFavs] = useState(null);

  useEffect(() => {
    let favourites = JSON.parse(localStorage.getItem("favourites"));
    if (favourites) {
      setFavs(favourites);
    }
  }, []);

  return (
    <div className="list-page">
      {favs === null ? (
        <div className="empty-list">
          <Link to="/">
            <h2>You have no favourites! Click me to go back to movies</h2>
          </Link>
        </div>
      ) : (
        <div className="movie-grid-wrapper">
          <div className="movie-gallery">
            {favs.map((movie) => (
              <Poster key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}
      {favs === null && <div className="empty-list-bg"></div>}
    </div>
  );
};

export default Favourites;
