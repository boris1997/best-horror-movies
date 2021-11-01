import Spinner from "components/Spinner/Spinner";
import { useActions } from "customHooks/useActions";
import { useTypedSelector } from "customHooks/useTypedSelector";
import { useEffect } from "react";
import { useHistory } from "react-router";
import MoviesView from "./MoviesView/MoviesView";

const MoviesContainer = () => {
  const { fetchTopHorrorMovies } = useActions();

  const [movies, amount, limit, page] = useTypedSelector(
    ({ movies: { movies, amount, limit, page } }) => [
      movies,
      amount,
      limit,
      page,
    ]
  );
  const {
    location: { search },
  } = useHistory();

  let uiMovies = <Spinner />;

  if (movies?.length) {
    uiMovies = <MoviesView amount={amount} limit={limit} page={page} />;
  }
  let searchPage = 1;

  if (search) {
    const newPageNumber = search.split("");
    searchPage = +newPageNumber[newPageNumber.length - 1];
  }
  useEffect(() => {
    fetchTopHorrorMovies(10, "2160p", "rating", "horror", searchPage);
  }, [searchPage]);

  return <>{uiMovies}</>;
};

export default MoviesContainer;
