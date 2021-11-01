import Img from "components/Img/Img";
import { IMoviesData } from "globalTypes/movies";
import GoBackIcon from "icons/GoBackIcon";
import HideIcon from "icons/HideIcon";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { getMoviePosition } from "../utility/getMoviePosition";
import moviesClasses from "./MoviesLayoutView.module.scss";

interface IMoviesLayoutView {
  movies: IMoviesData[];
  page: number;
  hiddenMovies: number[];
  hideMovie: (id: number) => void;
  showMovie: (id: number) => void;
}

const MoviesLayoutView: FC<IMoviesLayoutView> = ({
  movies,
  page,
  hideMovie,
  hiddenMovies,
  showMovie,
}) => {
  const renderMovies = () =>
    movies.map(
      ({ id, medium_cover_image, genres, rating, runtime, title, year }, i) => {
        const genresUI = genres.map((genre, i) => {
          const punctuationMark = i === genres.length - 1 ? "." : ", ";
          return (
            <li key={i + id}>
              {genre}
              {punctuationMark}
            </li>
          );
        });

        const moviePosition = getMoviePosition(page, i);
        const isHidden = hiddenMovies.includes(id);
        let unAtive = "";
        if (isHidden) {
          unAtive = moviesClasses.unactive;
        }

        return (
          <div key={id} className={moviesClasses.item}>
            <div className={moviesClasses.itemMain + " " + unAtive}>
              <div className={moviesClasses.itemImg}>
                {<Img alt={title} src={medium_cover_image} />}
              </div>
              <div className={moviesClasses.itemBody}>
                <div className={moviesClasses.movieData}>
                  <div className={moviesClasses.titleBody}>
                    {moviePosition}.{" "}
                    {
                      <NavLink
                        to={{
                          pathname: `/${title}`,
                          state: {
                            titleid: id,
                          },
                        }}
                      >
                        {title}
                      </NavLink>
                    }
                  </div>
                  <div className={moviesClasses.genres}>
                    <ul className="d-f">genres: {genresUI}</ul>
                    {/* <span>{totalProductPrice} ₽</span> */}
                  </div>
                  <div className={moviesClasses.rating}>
                    runtime: {runtime} m
                    {/* <span>{totalProductPrice} ₽</span> */}
                  </div>
                  <div className={moviesClasses.rating}>
                    year: {year}
                    {/* <span>{totalProductPrice} ₽</span> */}
                  </div>
                </div>
                <div className={moviesClasses.movieRating}>
                  <div>rating:</div>
                  <div>{rating}</div>
                  {/* <span>{totalProductPrice} ₽</span> */}
                </div>

                <div
                  className={moviesClasses.hideIcon}
                  onClick={(e) => hideMovie(id)}
                >
                  <HideIcon />
                  <div className="">hide movie</div>
                </div>
              </div>
            </div>
            <div className={moviesClasses.invisible + " " + unAtive}>
              <div
                className={moviesClasses.goBack}
                onClick={() => showMovie(id)}
              >
                <GoBackIcon />
                Show movie
              </div>
              <span className="">
                Movie is hidden, but you can return movie at any moment, just
                click Show movie button
              </span>
            </div>
          </div>
        );
      }
    );

  return <>{renderMovies()}</>;
};

export default MoviesLayoutView;
