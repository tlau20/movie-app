import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const toggleMenu = (_) => {
    document.body.classList.toggle("show");
  };

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1200) {
      document.body.classList.remove("show");
    }
  });

  return (
    <header>
      <div className="logo">
        <NavLink to="/">What's That?</NavLink>
      </div>
      <div className="menu-btn" onClick={toggleMenu}>
        <img src="/images/menu.png" alt="burger menu icon" />
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/favourites">Favourites</NavLink>
          </li>
          <li>
            <NavLink to="/watchlist">Watchlist</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
