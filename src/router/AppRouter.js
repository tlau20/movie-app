import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import MovieGallery from "../components/MovieGallery";
import MovieGallery from "../components/MovieGallery";
import Movie from "../components/Movie";
import "../styles/style.scss";
import Header from "../components/Header";
import About from "../components/About";
import Favourites from "../components/Favourites";
import Watchlist from "../components/Watchlist";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

function AppRouter() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main id="main">
          <ScrollToTop>
            <Switch>
              <Route path="/" exact>
                <MovieGallery />
              </Route>
              <Route path="/movie/:id">
                <Movie />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/favourites">
                <Favourites />
              </Route>
              <Route path="/watchlist">
                <Watchlist />
              </Route>
            </Switch>
          </ScrollToTop>
        </main>
        <BackToTopButton />
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
