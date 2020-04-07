import React from "react";
import { CssContainer, CssButton, TodoTitle } from "./styles";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CheckIcon from "@material-ui/icons/Check";
import DetailsIcon from "@material-ui/icons/Details";

const TodoItem = (props) => {
  const { title, deleteTodo, completeTodo, todoDetail, index } = props;
  return (
    <CssContainer>
      <CssButton onClick={deleteTodo}>
        <DeleteOutlineIcon />
      </CssButton>
      <CssButton onClick={completeTodo}>
        <CheckIcon />
      </CssButton>
      <CssButton onClick={todoDetail}>
        <DetailsIcon />
      </CssButton>
      <TodoTitle>{`${index + 1} - ${title}`}</TodoTitle>
    </CssContainer>
  );
};

export default TodoItem;
