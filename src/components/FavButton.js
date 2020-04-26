import React, { useState, useEffect } from "react";
import {
  isStored,
  removeFromStorage,
  addToStorage,
} from "../utility/Utilities";
import LikeButton from "../images/like.png";
import UnlikeButton from "../images/unlike.png";

const FavButton = ({ movie, single }) => {
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
    <div className="interactive-btn like-btn">
      <img
        src={isFav ? LikeButton : UnlikeButton}
        alt="heart"
        onClick={handleClick}
      />
    </div>
  );
};

export default FavButton;
