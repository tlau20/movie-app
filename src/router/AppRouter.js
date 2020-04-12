import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieGallery from "../components/MovieGallery";
import Movie from "../components/Movie";

function AppRouter() {
  return (
    <Router>
      <div className="wrapper">
        <Switch>
          <Route path="/" exact>
            <MovieGallery />
          </Route>
          <Route path="/movie/:id">
            <Movie />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
