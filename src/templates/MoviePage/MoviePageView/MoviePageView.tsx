import SectionHeader from "components/Section/SectionHeader/SectionHeader";
import WithSection from "components/Section/WithSection/WithSection";
import { IMovieData } from "globalTypes/movies";
import React, { FC } from "react";
import MoviePageCommentsContainer from "./MoviePageComments/MoviePageCommentsContainer";
import MoviePageMainView from "./MoviePageMain/MoviePageMainView";

interface IMoviePageView {
  movie: IMovieData;
}

const MoviePageView: FC<IMoviePageView> = ({ movie }) => {
  return (
    <>
      <WithSection>
        <MoviePageMainView movie={movie} />
      </WithSection>
      <WithSection>
        <SectionHeader title="Comments" />
        <MoviePageCommentsContainer />
      </WithSection>
    </>
  );
};

export default MoviePageView;
