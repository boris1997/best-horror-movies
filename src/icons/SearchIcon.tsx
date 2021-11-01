import React, { FC } from "react";
import { IIcon } from "./IconType";

const SearchIcon: FC<IIcon> = ({ IconClasses }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={IconClasses && IconClasses}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 15L11 11M7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7C13 10.3137 10.3137 13 7 13Z"
        stroke="black"
      />
    </svg>
  );
};

export default SearchIcon;
