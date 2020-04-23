import React, { useState } from "react";
import { searchMovies } from "../utility/MovieAPI";
import SearchResult from "./SearchResult";

const Searchbar = () => {
  const [results, setResults] = useState([]);

  const getSearchResults = async (e) => {
    const body = document.getElementById("main");
    body.style.opacity = 0.3;
    const searchResults = await searchMovies(e.target.value).catch((error) => {
      console.log(error);
    });
    setResults(searchResults);
  };

  const clearSearch = (e) => {
    const body = document.getElementById("main");
    body.style.opacity = 1;
    e.target.value = "";
    setTimeout(() => {
      setResults([]);
    }, 100);
  };

  return (
    <div className="search-container">
      <div className="searchbar" onBlur={clearSearch}>
        <input
          type="text"
          placeholder="Search movies..."
          onChange={getSearchResults}
        />
      </div>
      <div className="search-results">
        {results &&
          results.map((movie) => <SearchResult key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Searchbar;
