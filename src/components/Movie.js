import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovie } from "../utility/MovieAPI";
import FavButton from "./FavButton";
import WatchLaterButton from "./WatchLaterButton";

const Movie = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const movie = await getMovie(id).catch((error) => {
        console.log(error);
      });
      setMovie(movie);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <img src={movie.backdrop_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <FavButton movie={movie} />
      <WatchLaterButton movie={movie} />
      <Link to="/">Back to Movies</Link>
    </div>
  );
};

export default Movie;
