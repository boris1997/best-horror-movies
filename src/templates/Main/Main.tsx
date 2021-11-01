import SectionHeader from "components/Section/SectionHeader/SectionHeader";
import WithSection from "components/Section/WithSection/WithSection";
import React from "react";
import MoviesContainer from "templates/Movies/MoviesContainer";
import DiscountedProductsContainer from "templates/Movies/MoviesContainer";

const Main = () => {
  return (
    <>
      <WithSection>
        <SectionHeader title={"Best Horror movies in 4k"} />
        <div className="d-f fd-c jc-c ai-c">
          <MoviesContainer />
        </div>
        <div className="">Пагиация</div>
      </WithSection>
    </>
  );
};

export default Main;
