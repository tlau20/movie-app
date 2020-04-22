import React, { useState } from "react";
import { searchMovies } from "../utility/MovieAPI";
import SearchResult from "./SearchResult";

const Searchbar = () => {
  const [results, setResults] = useState([]);

  const getSearchResults = async (e) => {
    e.preventDefault();
    const searchResults = await searchMovies(e.target.value).catch((error) => {
      console.log(error);
    });
    setResults(searchResults);
  };

  const resetSearch = () => {
    setResults([]);
  };

  //not working 100%
  const clearSearch = (e) => {
    e.target.value = "";
  };

  return (
    <div className="search-container">
      <div className="searchbar" onBlur={clearSearch}>
        <input
          type="text"
          placeholder="Search for movies..."
          onChange={getSearchResults}
        />
      </div>
      <div className="search-results">
        {results &&
          results.map((movie) => (
            <SearchResult
              key={movie.id}
              movie={movie}
              resetSearch={resetSearch}
            />
          ))}
      </div>
    </div>
  );
};

export default Searchbar;
