import React from "react";
import { CssContainer, CssButton, TodoTitle } from "./styles";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CheckIcon from "@material-ui/icons/Check";
import DetailsIcon from "@material-ui/icons/Details";

const TodoItem = (props) => {
  const { title } = props;
  return (
    <CssContainer>
      <CssButton>
        <DeleteOutlineIcon />
      </CssButton>
      <CssButton>
        <CheckIcon />
      </CssButton>
      <CssButton>
        <DetailsIcon />
      </CssButton>
      <TodoTitle>{`${title}`}</TodoTitle>
    </CssContainer>
  );
};

export default TodoItem;
