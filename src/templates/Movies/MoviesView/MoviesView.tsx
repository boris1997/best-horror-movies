import Pagination from "components/Pagination/Pagination";
import SectionHeader from "components/Section/SectionHeader/SectionHeader";
import WithSection from "components/Section/WithSection/WithSection";
import React, { FC } from "react";
import MoviesLayoutContainer from "./MoviesLayout/MoviesLayoutContainer";
import movieViewClasses from "./MoviesView.module.scss";

interface IMoviesView {
  amount: number;
  limit: number;
  page: number;
}

const MoviesView: FC<IMoviesView> = ({ amount, page, limit }) => {
  return (
    <>
      {" "}
      <WithSection>
        <SectionHeader title={"Best Horror movies in 4k"} />
        <div className={movieViewClasses.layout}>
          <MoviesLayoutContainer />
        </div>
        <div className={movieViewClasses.pagination}>
          <Pagination
            shouldBeActive
            amount={amount}
            page={page}
            limit={limit}
          />
        </div>
      </WithSection>
    </>
  );
};

export default MoviesView;
