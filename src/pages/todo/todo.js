import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TodoItem from "../../components/todoItem/todoItem";
import GridList from "../../components/gridList/gridList";
import { CssContainer } from "./styles";

const Todo = (props) => {
  const TodoList = props.todoList.map((todo, index) => (
    <TodoItem index={index} title={todo.title} />
  ));
  return (
    <CssContainer>
      <GridList>{TodoList}</GridList>
    </CssContainer>
  );
};

const mapStateToProps = (store) => ({
  todoList: store.todoState.todos,
});

export default withRouter(connect(mapStateToProps)(Todo));
