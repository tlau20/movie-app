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
