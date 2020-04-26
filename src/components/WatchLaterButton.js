import React, { useState, useEffect } from "react";
import {
  isStored,
  removeFromStorage,
  addToStorage,
} from "../utility/Utilities";
import AddButton from "../images/add.png";
import RemoveButton from "../images/remove.png";

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
      <img src={watchLater ? RemoveButton : AddButton} alt="watchlist" />
    </div>
  );
};

export default WatchLaterButton;
