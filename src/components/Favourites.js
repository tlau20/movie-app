import React, { useState, useEffect } from "react";
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
    <div>
      {favs === null ? (
        <h2>No favourites</h2>
      ) : (
        <div className="movie-gallery">
          {favs.map((movie) => (
            <Poster key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
