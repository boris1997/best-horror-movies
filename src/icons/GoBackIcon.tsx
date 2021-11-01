import React, { FC } from "react";
import { IIcon } from "./IconType";

const GoBackIcon: FC<IIcon> = ({ IconClasses }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="black"
      className={IconClasses && IconClasses}
      xmlns="http://www.w3.org/2000/svg"
      stroke="none"
    >
      <path d="M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z" />
    </svg>
  );
};

export default GoBackIcon;
