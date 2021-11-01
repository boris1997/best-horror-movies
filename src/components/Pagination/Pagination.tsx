import React, { FC } from "react";
import { Link } from "react-router-dom";
import paginationClasses from "./Pagination.module.scss";

interface IPagination {
  page?: number;
  amount: number;
  limit: number;
  shouldBeActive: boolean;
}

const Pagination: FC<IPagination> = ({
  page,
  limit,
  amount,
  shouldBeActive = false,
}) => {
  let pageAmount = [];
  for (let i = 0; i < Math.ceil(amount / limit); i++) {
    pageAmount.push(i + 1);
  }

  return (
    <div className={paginationClasses.pagination}>
      {pageAmount.map((productPage, i) => {
        const queryString = productPage > 1 ? `?page=${productPage}` : "";
        const active = productPage === page ? paginationClasses.active : "";
        return (
          <Link to={`${queryString}`} key={productPage}>
            <span className={paginationClasses.pageLink + " " + active}>
              {productPage}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Pagination;
