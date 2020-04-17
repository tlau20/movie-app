import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <NavLink to="/">Movie App Logo</NavLink>
      </div>
      <div className="navbar">
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
      </div>
    </header>
  );
};

export default Header;
