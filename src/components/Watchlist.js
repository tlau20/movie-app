import React, { useState, useEffect } from "react";
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
    <main>
      {list === null ? (
        <h2>Watchlist is empty</h2>
      ) : (
        <div className="movie-gallery">
          {list.map((movie) => (
            <Poster key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Watchlist;
