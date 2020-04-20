import React, { useState, useEffect } from "react";
import {
  isStored,
  removeFromStorage,
  addToStorage,
} from "../utility/Utilities";

const FavButton = ({ movie }) => {
  const [isFav, setFav] = useState(false);

  useEffect(() => {
    const isFav = isStored(movie.id);
    setFav(isFav);
  }, [movie.id]);

  const handleClick = () => {
    if (isFav) {
      removeFromStorage(movie.id);
      setFav(false);
    } else {
      addToStorage(movie);
      setFav(true);
    }
  };

  return (
    <div className="interactive-btn">
      <img
        src={isFav ? "/images/unlike.png" : "/images/like.png"}
        alt="heart"
        onClick={handleClick}
      />
    </div>
  );
};

export default FavButton;
