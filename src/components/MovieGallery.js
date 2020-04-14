import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { getMovies } from "../utility/MovieAPI.js";
import SortOrder from "./SortOrder.js";
import Poster from "./Poster.js";

class MovieGallery extends Component {
  state = {
    sortOrder: "np",
    movies: null,
  };

  componentDidMount = () => {
    this.getMovies();
  };

  getMovies = async () => {
    const movies = await getMovies(this.state.sortOrder, 1);
    this.setState({ movies: movies });
  };

  handleSortUpdate = (order) => {
    this.setState({ sortOrder: order }, () => {
      this.getMovies();
    });
  };

  render() {
    if (this.state.movies === null) {
      return "";
    } else {
      return (
        <div className="movie-gallery">
          <SortOrder updateSortOrder={this.handleSortUpdate} />
          {this.state.movies.map((movie) => (
            <Poster key={movie.id} movie={movie} />
          ))}
        </div>
      );
    }
  }
}

export default MovieGallery;
