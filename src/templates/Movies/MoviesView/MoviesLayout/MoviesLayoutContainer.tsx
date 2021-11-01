import Spinner from "components/Spinner/Spinner";
import { useTypedSelector } from "customHooks/useTypedSelector";
import React, { useEffect, useState } from "react";
import MoviesLayoutView from "./MoviesLayoutView/MoviesLayoutView";

const MoviesLayoutContainer = () => {
  const [movies, page] = useTypedSelector(({ movies: { movies, page } }) => [
    movies,
    page,
  ]);

  const [hiddenMovies, setHiddenMovies] = useState<number[]>([]);

  let uiMovies = <Spinner />;
  const setHiddenMoviesToLocalStorage = (copyHiddenMovies: number[]) => {
    localStorage.setItem("hiddenMovies", JSON.stringify(copyHiddenMovies));
  };
  const hideMovie = (id: number) => {
    let copyHiddenMovies = [...hiddenMovies];

    if (!copyHiddenMovies.includes(id)) {
      copyHiddenMovies = [...copyHiddenMovies, id];
      setHiddenMovies(copyHiddenMovies);
      setHiddenMoviesToLocalStorage(copyHiddenMovies);
    }
  };

  const showMovie = (id: number) => {
    let copyHiddenMovies = [...hiddenMovies];
    copyHiddenMovies = copyHiddenMovies.filter((movieId) => movieId !== id);
    setHiddenMovies(copyHiddenMovies);
    setHiddenMoviesToLocalStorage(copyHiddenMovies);
  };

  useEffect(() => {
    let copyHiddenMovies = localStorage.getItem("hiddenMovies");
    if (copyHiddenMovies) {
      let copyHiddenMoviesArraye = JSON.parse(copyHiddenMovies);
      setHiddenMovies(copyHiddenMoviesArraye);
    }
  }, []);

  if (movies) {
    uiMovies = (
      <MoviesLayoutView
        movies={movies}
        page={page}
        hiddenMovies={hiddenMovies}
        hideMovie={hideMovie}
        showMovie={showMovie}
      />
    );
  }

  return <>{uiMovies}</>;
};

export default MoviesLayoutContainer;
