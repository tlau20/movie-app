export const addToStorage = (movie, storage = "favourites") => {
  if (!localStorage.getItem(storage)) {
    const moviesToAdd = JSON.stringify([movie]);
    localStorage.setItem(storage, moviesToAdd);
  } else {
    const moviesToAdd = JSON.parse(localStorage.getItem(storage));
    moviesToAdd.push(movie);
    localStorage.setItem(storage, JSON.stringify(moviesToAdd));
  }
};

export const removeFromStorage = (movieID, storage = "favourites") => {
  let moviesInStorage = JSON.parse(localStorage.getItem(storage));
  const index = moviesInStorage.findIndex((movie) => +movie.id === +movieID);
  moviesInStorage.splice(index, 1);
  if (moviesInStorage.length === 0) {
    localStorage.removeItem(storage);
  } else {
    localStorage.setItem(storage, JSON.stringify(moviesInStorage));
  }
};

export const isStored = (movieID, storage = "favourites") => {
  if (!localStorage.getItem(storage)) return false;
  const moviesInStorage = JSON.parse(localStorage.getItem(storage));
  for (let i = 0; i < moviesInStorage.length; i++) {
    if (+moviesInStorage[i].id === +movieID) {
      return true;
    }
  }
  return false;
};

export const setMovieList = (movieList, storage = "np") => {
  localStorage.setItem(storage, JSON.stringify(movieList));
};

export function setLastFetch() {
  // console.log("setting new expiry...");
  let d = new Date();
  document.cookie = "lastfetch=" + (d.getTime() + 60 * 60000) + ";path=/";
}

export function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function checkLastFetch() {
  let d = new Date();
  let now = d.getTime();
  let lastfetch = getCookie("lastfetch");
  if (lastfetch !== "") {
    if (+now - +lastfetch > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}
