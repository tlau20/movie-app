import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { getMovies } from "../utility/MovieAPI.js";
import SortOrder from "./SortOrder.js";

class MovieGallery extends Component {
  state = {
    sortOrder: "np",
    movies: null,
  };

  async componentDidMount() {
    const movies = await getMovies(this.state.sortOrder, 1);
    this.setState({ movies: movies });
  }

  async getMovies() {
    const movies = await getMovies(this.state.sortOrder, 1);
    this.setState({ movies: movies });
  }

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
          <ul>
            {this.state.movies.map((movie) => (
              <li key={movie.id}>
                <Link to={"/movie/" + movie.id}>
                  <img src={movie.poster_path} alt={movie.title} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default MovieGallery;
