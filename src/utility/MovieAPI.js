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

export async function getMovie(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;
  const res = await fetch(url);

  // const trailer_url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=a3922856eb59dc0a86a6849412c18182&language=en-US`;
  // const response = await fetch(trailer_url);

  // let trailer = "";
  // if (response.status === 200) {
  //   const data = await response.json();
  //   for (let i = 0; i < data.results.length; i++) {
  //     if (
  //       data.results[i].type === "Trailer" &&
  //       data.results[i].site === "YouTube"
  //     ) {
  //       trailer = `https://www.youtube.com/watch?v=${data.results[i].key}`;
  //       // trailer = data.results[i].key;
  //     }
  //   }
  // }

  if (res.status === 200) {
    const data = await res.json();
    const movie = {
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
      backdrop_path:
        config.images.secure_base_url +
        config.images.backdrop_sizes[3] +
        "/" +
        data.backdrop_path,
      poster_path:
        config.images.secure_base_url +
        config.images.poster_sizes[3] +
        "/" +
        data.poster_path,
      genres: data.genres,
      rating: data.vote_average,
      // trailer: trailer,
    };
    return movie;
  }

  throw new Error(res.statusText);
}

//now playing, popular, top rated, upcoming
//currently only returns 1 page (20 movies)
export async function getMovies(order, page) {
  let url = "";
  switch (order) {
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

  const res = await fetch(url);
  if (res.status === 200) {
    const data = await res.json();
    const cleanResults = data.results.map((movieInfo) => {
      let movie = {
        id: movieInfo.id,
        poster_path:
          config.images.secure_base_url +
          config.images.poster_sizes[3] +
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
  }

  throw new Error(res.statusText);
}
