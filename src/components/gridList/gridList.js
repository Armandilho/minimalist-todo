import React from "react";
import { ColumnContainer } from "./style";

const gridList = (props) => {
  return <ColumnContainer>{props.children}</ColumnContainer>;
};

export default gridList;
