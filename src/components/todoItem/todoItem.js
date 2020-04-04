import React from "react";
import { connect } from "react-redux";
import { CssContainer, CssButton, TodoTitle } from "./styles";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CheckIcon from "@material-ui/icons/Check";
import DetailsIcon from "@material-ui/icons/Details";

const TodoItem = props => {
  const { title, index } = props;
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
      <TodoTitle>{`${index} - ${title}`}</TodoTitle>
    </CssContainer>
  );
};

const mapStateToProps = store => ({});

export default connect(mapStateToProps)(TodoItem);
