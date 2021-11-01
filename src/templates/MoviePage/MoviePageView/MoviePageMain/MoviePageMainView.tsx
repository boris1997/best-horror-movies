import Img from "components/Img/Img";
import { IMovieData } from "globalTypes/movies";
import React, { FC, Fragment } from "react";
import movieClasses from "./MoviePageMainView.module.scss";

interface IMoviePageView {
  movie: IMovieData;
}

const MoviePageMainView: FC<IMoviePageView> = ({
  movie: {
    description_intro,
    genres,
    like_count,
    background_image,
    medium_cover_image,
    rating,
    runtime,
    title,
    torrents,
    year,
  },
}) => {
  const genresUI = genres.map((genre, i) => {
    const punctuationMark = i === genres.length - 1 ? "." : ", ";
    return (
      <Fragment key={i}>
        {genre}
        {punctuationMark}
      </Fragment>
    );
  });

  return (
    <div className={movieClasses.main}>
      <div className={movieClasses.body}>
        <div className={movieClasses.cover}>
          {<Img alt={title} src={medium_cover_image} />}
        </div>
        <div className={movieClasses.title}>{<h1>{title}</h1>}</div>
        <div className={movieClasses.mainInfo}>
          <div className={movieClasses.movieData}>
            <div className={movieClasses.genres}>genres: {genresUI}</div>
            <div className={movieClasses.rating}>
              runtime: {runtime} m{/* <span>{totalProductPrice} ₽</span> */}
            </div>
            <div className={movieClasses.year}>
              year: {year}
              {/* <span>{totalProductPrice} ₽</span> */}
            </div>
            <div className={movieClasses.year}>
              like count: {like_count}
              {/* <span>{totalProductPrice} ₽</span> */}
            </div>
            {/* <a href={torrents[2].url}>{torrents[2].url}</a> */}
          </div>
          <div className={movieClasses.movieRating}>
            <div>{rating}</div>
            {/* <span>{totalProductPrice} ₽</span> */}
          </div>
        </div>
        <div className={movieClasses.description}>
          <p>{description_intro}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviePageMainView;
