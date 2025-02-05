import React, { Component } from "react";
import { getMovies } from "../utility/MovieAPI.js";
import {
  setMovieList,
  checkLastFetch,
  setLastFetch,
} from "../utility/Utilities.js";
import SortOrder from "./SortOrder.js";
import Poster from "./Poster.js";
import InfiniteScroll from "react-infinite-scroll-component";

class MovieGallery extends Component {
  state = {
    sortOrder: "np",
    movies: null,
    npMovies: null,
    pMovies: null,
    trMovies: null,
    uMovies: null,
  };

  componentDidMount = () => {
    this.loadMovies();
  };

  loadMovies = async () => {
    let npMovies = [];
    let pMovies = [];
    let trMovies = [];
    let uMovies = [];
    let sortOrder = localStorage.getItem("sortOrder");

    if (checkLastFetch()) {
      console.log("fetching...");
      await Promise.all([
        (npMovies = await getMovies("np", 1)),
        (pMovies = await getMovies("p", 1)),
        (trMovies = await getMovies("tr", 1)),
        (uMovies = await getMovies("u", 1)),
      ]).catch((error) => {
        console.log(error);
      });

      setMovieList(npMovies);
      setMovieList(pMovies, "p");
      setMovieList(trMovies, "tr");
      setMovieList(uMovies, "u");
      setLastFetch();
    } else {
      console.log("local storage...");
      npMovies = JSON.parse(localStorage.getItem("np"));
      pMovies = JSON.parse(localStorage.getItem("p"));
      trMovies = JSON.parse(localStorage.getItem("tr"));
      uMovies = JSON.parse(localStorage.getItem("u"));
    }

    if (sortOrder) {
      this.setState({ sortOrder: sortOrder }, () => {
        this.handleSortUpdate(sortOrder);
      });
    }

    this.setState({
      movies: npMovies,
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
    localStorage.setItem("sortOrder", order);
    this.setState({ sortOrder: order });
  };

  fetchMovies = async () => {
    const page = this.state.movies.length / 20 + 1;
    const movies = await getMovies(this.state.sortOrder, page);
    this.setState({ movies: this.state.movies.concat(movies) });
  };

  render() {
    if (this.state.movies === null) {
      return "";
    } else {
      return (
        <div className="movie-grid-wrapper">
          <SortOrder
            updateSortOrder={this.handleSortUpdate}
            sortOrder={this.state.sortOrder}
          />
          <InfiniteScroll
            className="movie-gallery"
            dataLength={this.state.movies.length}
            next={this.fetchMovies}
            hasMore={true}
            loader={<h3>Loading...</h3>}
          >
            {this.state.movies.map((movie) => (
              <Poster key={movie.id} movie={movie} />
            ))}
          </InfiniteScroll>
        </div>
      );
    }
  }
}

export default MovieGallery;
