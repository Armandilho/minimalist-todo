import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sendTodo } from "../../actions";
import { withRouter } from "react-router-dom";
import TodoItem from "../../components/todoItem/todoItem";
import GridList from "../../components/gridList/gridList";
import { CssContainer, CssTextField, TodoContainer, CssButton } from "./styles";

const Todo = (props) => {
  const TodoList = props.todoList.map((todo, index) => (
    <TodoItem key={index} title={todo.title} />
  ));

  const [todoValue, setTodoValue] = useState({
    title: "",
    description: "",
  });

  const onChangeHandler = (e) => {
    setTodoValue({ ...todoValue, [e.target.name]: e.target.value });
  };

  const sendTodoHandler = () => {
    const { sendTodo } = props;
    sendTodo(todoValue);
  };

  return (
    <CssContainer>
      <TodoContainer>
        <GridList>{TodoList}</GridList>
        <CssTextField
          id="titleInput"
          label="title"
          name="title"
          autoComplete="off"
          value={todoValue.title}
          onChange={onChangeHandler}
        />
        <CssTextField
          id="descriptionInput"
          label="description"
          name="description"
          autoComplete="off"
          multiline
          rows="4"
          value={todoValue.description}
          onChange={onChangeHandler}
        />
        <CssButton
          onClick={() => sendTodoHandler(todoValue)}
          variant="outlined"
        >
          ADD
        </CssButton>
      </TodoContainer>
    </CssContainer>
  );
};

const mapStateToProps = (store) => ({
  todoList: store.todoState.todos,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ sendTodo }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Todo));
