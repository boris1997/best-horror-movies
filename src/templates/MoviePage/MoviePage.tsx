import Spinner from "components/Spinner/Spinner";
import { useActions } from "customHooks/useActions";
import { useTypedSelector } from "customHooks/useTypedSelector";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import MoviePageView from "./MoviePageView/MoviePageView";

const MoviePage = () => {
  const {
    location: { state },
  } = useHistory<any>();
  const movie = useTypedSelector(({ movies: { movie } }) => movie);
  const titleid: number = state.titleid;

  const { fetchTopHorrorMovie } = useActions();

  useEffect(() => {
    fetchTopHorrorMovie(titleid);
  }, []);

  let uiMovie = <Spinner />;

  if (movie) {
    uiMovie = <MoviePageView movie={movie} />;
  }

  return <>{uiMovie}</>;
};

export default MoviePage;
