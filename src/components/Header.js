import React from "react";
import { NavLink } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import Burger from "../images/menu.png";

const Header = () => {
  const toggleMenu = (_) => {
    document.body.classList.toggle("show");
  };

  window.onload = function () {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
      } else {
        document.getElementById("header").style.top = "-50px";
      }
      prevScrollpos = currentScrollPos;

      const scrollToTopBtn = document.getElementById("scroll-to-top-btn");
      if (
        document.body.scrollTop > 600 ||
        document.documentElement.scrollTop > 600
      ) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
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
        <img src={Burger} alt="burger menu icon" />
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
