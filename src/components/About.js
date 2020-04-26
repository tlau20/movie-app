import React from "react";

const About = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-content">
        <h2>What's That?</h2>
        <p>
          A React web application to browse and discover new movies. Use it to
          save your favourites and to compile a never-ending backlog!
        </p>
      </div>
      <div className="credits">
        <p>
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.
        </p>
        <img src="/images/tmdb-logo.svg" alt="tmdb logo" />
      </div>
      <div className="about-us-bg"></div>
    </div>
  );
};

export default About;
