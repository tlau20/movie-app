import React from "react";
import { NavLink } from "react-router-dom";
import Searchbar from "../components/Searchbar";

const Header = () => {
  const toggleMenu = (_) => {
    document.body.classList.toggle("show");
  };

  window.onload = function () {
    // window.addEventListener("resize", function () {
    //   if (window.innerWidth >= 1200) {
    //     document.body.classList.remove("show");
    //   }
    // });

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
      } else {
        document.getElementById("header").style.top = "-50px";
      }
      prevScrollpos = currentScrollPos;
    };

    document.getElementById("main").addEventListener("click", function () {
      if (document.body.classList.contains("show")) {
        document.body.classList.remove("show");
      }
    });
  };

  return (
    <header id="header">
      <div className="logo">
        <NavLink to="/">WT</NavLink>
      </div>
      <Searchbar />
      <div className="menu-btn" onClick={toggleMenu}>
        <img src="/images/menu.png" alt="burger menu icon" />
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/favourites" onClick={toggleMenu}>
              Favourites
            </NavLink>
          </li>
          <li>
            <NavLink to="/watchlist" onClick={toggleMenu}>
              Watchlist
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={toggleMenu}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
