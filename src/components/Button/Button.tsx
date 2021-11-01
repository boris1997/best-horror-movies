import React, { FC } from "react";

import defaultBtnClasses from "./button.module.scss";
export interface IButton {
  type: ButtonTypes;
  customClass?: string;
  disabled?: boolean;
  size?: ButtonSizes;
  clicked?: any;
}

export enum ButtonTypes {
  main = "main",
  secondary = "secondary",
}
export enum ButtonSizes {
  fullWidth = "full-width",
  main = "main",
}

const Button: FC<IButton> = ({
  type,
  customClass,
  clicked,
  disabled,
  children,
  size,
}) => {
  const buttonClasses = [
    defaultBtnClasses.btn,
    type,
    disabled && defaultBtnClasses.disabled,
    customClass && customClass,
  ].join(" ");
  return (
    <>
      <button
        onClick={clicked}
        data-type={type}
        data-size={size}
        className={buttonClasses}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
