import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovie } from "../utility/MovieAPI";

const Movie = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const movie = await getMovie(id);
      setMovie(movie);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <Link to="/">Back to Movies</Link>
    </div>
  );
};

export default Movie;
