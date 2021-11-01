import React, { FC } from "react";
import containerClasses from "./Container.module.scss";

const Container: FC = (props) => {
  return <div className={containerClasses.container}>{props.children}</div>;
};

export default Container;
