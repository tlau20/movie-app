import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../utility/MovieAPI";
import FavButton from "./FavButton";
import WatchLaterButton from "./WatchLaterButton";

const Movie = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movie = await getMovie(id).catch((error) => {
        console.log(error);
      });
      const genres = movie.genres.map((genre) => genre.name);
      setGenres(genres);
      setMovie(movie);
    };

    fetchData();
  }, [id]);

  return (
    <div className="movie">
      <div className="backdrop-wrapper">
        <img src={movie.backdrop_path} alt={movie.title} />
      </div>
      <div className="poster-wrapper">
        <img src={movie.poster_path} alt={movie.title} />
      </div>
      <div className="movie-info">
        <div className="movie-header">
          <div className="movie-title">
            <h2>{movie.title}</h2>
          </div>
          <div className="movie-rating">
            <h2 id="rating">{parseFloat(movie.rating).toFixed(1)}</h2>
          </div>
        </div>
        <div className="movie-details">
          <p>{movie.runtime} min</p>
          <p>{genres.join(", ")}</p>
          <FavButton movie={movie} />
          <WatchLaterButton movie={movie} />
        </div>
        <div className="movie-overview">
          {movie.tagline ? <p>- {movie.tagline} -</p> : ""}
          <p>{movie.overview}</p>
        </div>
        {/* <p>{movie.release_date}</p>
      <p>{movie.budget}</p>
    <p>{movie.revenue}</p> */}
        {/* <div className="fav-watchlist-btn"></div> */}
        {/* <Link to="/">Back to Movies</Link> */}
      </div>
    </div>
  );
};

export default Movie;
