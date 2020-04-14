import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { getMovies } from "../utility/MovieAPI.js";
import SortOrder from "./SortOrder.js";
import Poster from "./Poster.js";

class MovieGallery2 extends Component {
  state = {
    sortOrder: "np",
    movies: null,
    npMovies: null,
    pMovies: null,
    trMovies: null,
    uMovies: null,
  };

  componentDidMount = () => {
    if (this.state.movies === null) {
      this.getMovies();
    }
  };

  getMovies = async () => {
    const movies = await getMovies(this.state.sortOrder, 1);
    console.log(movies);
    const npMovies = [...movies];
    const pMovies = await getMovies("p", 1);
    const trMovies = await getMovies("tr", 1);
    const uMovies = await getMovies("u", 1);
    this.setState({
      movies: movies,
      npMovies: npMovies,
      pMovies: pMovies,
      trMovies: trMovies,
      uMovies: uMovies,
    });
  };

  handleSortUpdate = (order) => {
    switch (order) {
      case "p":
        this.setState({ movies: this.state.pMovies });
        break;
      case "tr":
        this.setState({ movies: this.state.trMovies });
        break;
      case "u":
        this.setState({ movies: this.state.uMovies });
        break;
      default:
        this.setState({ movies: this.state.npMovies });
        break;
    }
    this.setState({ sortOrder: order });
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

export default MovieGallery2;
