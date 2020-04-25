import React from "react";

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
      <img src="/images/up-arrow.png" alt="back to top button" />
    </div>
  );
};

export default BackToTopButton;
