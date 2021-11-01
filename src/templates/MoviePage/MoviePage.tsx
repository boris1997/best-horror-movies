import Spinner from "components/Spinner/Spinner";
import { useActions } from "customHooks/useActions";
import { useTypedSelector } from "customHooks/useTypedSelector";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import MoviePageView from "./MoviePageView/MoviePageView";

const MoviePage = () => {
  const {
    location: { search },
  } = useHistory<any>();
  const movie = useTypedSelector(({ movies: { movie } }) => movie);
  const { fetchTopHorrorMovie } = useActions();
  const movieIDstr = search.split("=");
  const movieID = +movieIDstr[movieIDstr.length - 1];
  useEffect(() => {
    console.log(movieID);
    fetchTopHorrorMovie(movieID);
  }, []);

  let uiMovie = <Spinner />;

  if (movie) {
    uiMovie = <MoviePageView movie={movie} />;
  }

  return <>{uiMovie}</>;
};

export default MoviePage;
