const config = {
  images: {
    base_url: "http://image.tmdb.org/t/p/",
    secure_base_url: "https://image.tmdb.org/t/p/",
    backdrop_sizes: ["w300", "w780", "w1280", "original"],
    logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
    poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
    profile_sizes: ["w45", "w185", "h632", "original"],
    still_sizes: ["w92", "w185", "w300", "original"],
  },
};

const key = "a3922856eb59dc0a86a6849412c18182";

export function getMovie(id) {
  let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;
  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      } else {
        return res.json();
      }
    })
    .then((data) => {
      let movie = {
        id: data.id,
        title: data.title,
        tagline: data.tagline,
        overview: data.overview,
        runtime: data.runtime,
        release_date: data.release_date,
        budget: data.budget,
        revenue: data.revenue,
        language: data.original_language,
        production_companies: data.production_companies,
        poster_path: data.poster_path,
        backdrop_path: data.backdrop_path,
        genres: data.genres,
      };
      return movie;
    })
    .catch((error) => {
      console.log(error);
    });
}

//now playing, popular, top rated, upcoming
//currently only returns 1 page (20 movies)
export function getMovies(order, page) {
  let url = "";
  switch (order) {
    case "np":
      url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&page=${page}`;
      break;
    case "p":
      url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=${page}`;
      break;
    case "tr":
      url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&page=${page}`;
      break;
    case "u":
      url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&page=${page}`;
      break;
    default:
      url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&page=${page}`;
      break;
  }

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      } else {
        return res.json();
      }
    })
    .then((data) => {
      let results = data.results;
      let cleanResults = results.map((movieInfo) => {
        let movie = {
          id: movieInfo.id,
          backdrop_path: movieInfo.backdrop_path,
          poster_path:
            config.images.base_url +
            config.images.poster_sizes[2] +
            "/" +
            movieInfo.poster_path,
          title: movieInfo.title,
          overview: movieInfo.overview,
          release_date: movieInfo.release_date,
          genre_ids: movieInfo.genre_ids,
        };
        return movie;
      });
      return cleanResults;
    })
    .catch((error) => {
      console.log(error);
    });
}
