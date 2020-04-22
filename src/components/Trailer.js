import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const Trailer = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = (_) => {
    setIsOpen(true);
  };

  return (
    <div className="trailer-container">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={id}
        onClose={() => setIsOpen(false)}
      />
      <div className="trailer-btn" onClick={openVideo}>
        <img src="/images/play-button.png" alt="play button" />
        <h3>Play Trailer</h3>
      </div>
    </div>
  );
};

export default Trailer;
