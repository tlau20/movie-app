import React from "react";

const BackToTopButton = () => {
  window.onload = function () {
    const scrollToTopBtn = document.getElementById("scroll-to-top-btn");
    window.onscroll = function () {
      if (
        document.body.scrollTop > 600 ||
        document.documentElement.scrollTop > 600
      ) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };
  };

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
