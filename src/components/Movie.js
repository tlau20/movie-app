import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../utility/MovieAPI";
import FavButton from "./FavButton";
import WatchLaterButton from "./WatchLaterButton";
import Poster from "./Poster";
import Trailer from "./Trailer";

const Movie = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movie = await getMovie(id).catch((error) => {
        console.log(error);
      });
      const genres = movie.genres.map((genre) => genre.name);
      setSimilarMovies(movie.similar_movies);
      setGenres(genres);
      setMovie(movie);
    };

    fetchData();
  }, [id]);

  return (
    <div className="movie">
      <div className="backdrop-wrapper">
        {movie.backdrop_path && movie.backdrop_path.includes("null") ? (
          <img src="/images/no-backdrop.jpg" alt="no backdrop" />
        ) : (
          <img src={movie.backdrop_path} alt={movie.title} />
        )}
      </div>
      <div className="poster-wrapper">
        {movie.poster_path && movie.poster_path.includes("null") ? (
          <div className="no-poster">
            <h3>{movie.title}</h3>
          </div>
        ) : (
          <img src={movie.poster_path} alt={movie.title} />
        )}
        {movie.trailer_id && (
          <div className="trailer-section">
            <Trailer id={movie.trailer_id} />
          </div>
        )}
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
          <p>
            {movie.language}&nbsp;&nbsp;|&nbsp;&nbsp;{movie.runtime}{" "}
            min&nbsp;&nbsp;|&nbsp;&nbsp;{genres.join(", ")}
            &nbsp;&nbsp;|&nbsp;&nbsp;{movie.release_date}
          </p>
        </div>
        <div className="movie-overview">
          {movie.tagline && <p className="movie-tagline">{movie.tagline}</p>}
          <p className="overview-text">{movie.overview}</p>
        </div>
      </div>
      <div className="movie-btns">
        <FavButton movie={movie} />
        <WatchLaterButton movie={movie} />
      </div>

      {similarMovies.length > 0 && (
        <h2 id="similar-movie-heading">Similar Movies</h2>
      )}
      {similarMovies.length > 0 ? (
        <div className="movie-gallery similar-movies">
          {similarMovies.map((m) => (
            <Poster key={m.id} movie={m} />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Movie;
