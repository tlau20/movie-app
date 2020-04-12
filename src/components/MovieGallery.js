import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../utility/MovieAPI.js";
import SortOrder from "./SortOrder.js";

class MovieGallery extends Component {
  state = {
    sortOrder: "np",
    movies: null,
  };

  componentDidMount() {
    this.getMovies();
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

  addToStorage = (movie, storage = "favourites") => {
    if (!localStorage.getItem(storage)) {
      const moviesToAdd = JSON.stringify([movie]);
      localStorage.setItem(storage, moviesToAdd);
    } else {
      const moviesToAdd = JSON.parse(localStorage.getItem(storage));
      moviesToAdd.push(movie);
      localStorage.setItem(storage, JSON.stringify(moviesToAdd));
    }
    this.render();
  };

  removeFromStorage = (movieID, storage = "favourites") => {
    let moviesInStorage = JSON.parse(localStorage.getItem(storage));
    const index = moviesInStorage.findIndex((movie) => +movie.id === +movieID);
    moviesInStorage.splice(index, 1);
    if (moviesInStorage.length === 0) {
      localStorage.removeItem(storage);
    } else {
      localStorage.setItem(storage, JSON.stringify(moviesInStorage));
    }
    this.render();
  };

  isStored = (movieID, storage = "favourites") => {
    if (!localStorage.getItem(storage)) return false;
    const moviesInStorage = JSON.parse(localStorage.getItem(storage));
    for (let i = 0; i < moviesInStorage.length; i++) {
      if (+moviesInStorage[i].id === +movieID) {
        return true;
      }
    }
    return false;
  };

  render() {
    if (this.state.movies === null) {
      return "";
    } else {
      return (
        <div className="movie-gallery">
          <SortOrder updateSortOrder={this.handleSortUpdate} />
          {this.state.movies.map((movie) => (
            <div key={movie.id} className="poster">
              <Link to={"/movie/" + movie.id}>
                <img src={movie.poster_path} alt={movie.title} />
              </Link>
              {this.isStored(movie.id) ? (
                <button
                  onClick={() => {
                    this.removeFromStorage(movie.id);
                  }}
                >
                  Remove
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.addToStorage(movie);
                  }}
                >
                  Add
                </button>
              )}
            </div>
          ))}
        </div>
      );
    }
  }
}

export default MovieGallery;
