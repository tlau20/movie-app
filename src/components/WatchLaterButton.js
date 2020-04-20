import React, { useState, useEffect } from "react";
import {
  isStored,
  removeFromStorage,
  addToStorage,
} from "../utility/Utilities";

const WatchLaterButton = ({ movie }) => {
  const storage = "watchlater";
  const [watchLater, setWatchLater] = useState(false);

  useEffect(() => {
    const watchLater = isStored(movie.id, storage);
    setWatchLater(watchLater);
  }, [movie.id]);

  const handleClick = () => {
    if (watchLater) {
      removeFromStorage(movie.id, storage);
      setWatchLater(false);
    } else {
      addToStorage(movie, storage);
      setWatchLater(true);
    }
  };

  return (
    <div className="interactive-btn" onClick={handleClick}>
      <img
        src={watchLater ? "/images/remove.png" : "/images/add.png"}
        alt="watchlist"
      />
      <p>Watchlist</p>
    </div>
  );
};

export default WatchLaterButton;
