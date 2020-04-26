import React from "react";
import ToTopButton from "../images/up-arrow.png";

const BackToTopButton = () => {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div
      className="back-to-top-btn"
      onClick={scrollToTop}
      id="scroll-to-top-btn"
    >
      <div className="back-to-top-content">
        <h3>Top</h3>
        <img src={ToTopButton} alt="back to top button" />
      </div>
    </div>
  );
};

export default BackToTopButton;
