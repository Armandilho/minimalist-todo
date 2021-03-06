import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sendTodo, deleteTodo, completeTodo } from "../../actions";
import { withRouter } from "react-router-dom";
import TodoItem from "../../components/todoItem/todoItem";
import GridList from "../../components/gridList/gridList";
import Dialog from "../../components/dialog/dialog";
import {
  CssContainer,
  CssTextField,
  TodoContainer,
  CssButton,
  WelcomeMessage,
  Division,
} from "./styles";

const Todo = (props) => {
  const { username, deleteCount, completedCount } = props;

  const [todoValue, setTodoValue] = useState({
    title: "",
    description: "",
  });

  const [todoModal, setTodoModal] = useState({
    title: "",
    description: "",
    modal: false,
  });

  const onChangeHandler = (e) => {
    setTodoValue({ ...todoValue, [e.target.name]: e.target.value });
  };

  const sendTodoHandler = () => {
    const { sendTodo } = props;
    sendTodo(todoValue);
  };

  const deleteTodoHandler = (todoIndex) => {
    const { todoList, deleteTodo } = props;
    const newTodoList = todoList.filter(
      (todoItem, index) => index !== todoIndex
    );
    deleteTodo(newTodoList);
  };

  const completeTodoHandler = (todoIndex) => {
    const { todoList, completeTodo } = props;
    const newTodoList = todoList.filter(
      (todoItem, index) => index !== todoIndex
    );
    completeTodo(newTodoList);
  };

  const todoDetailHandler = (todoIndex) => {
    const { todoList } = props;
    const inputTodoToModal = todoList.filter(
      (todoItem, index) => index === todoIndex
    );
    setTodoModal({
      title: inputTodoToModal[0].title,
      description: inputTodoToModal[0].description,
      modal: true,
    });
  };

  const handleClickModal = () => {
    setTodoModal({
      modal: false,
    });
  };

  const TodoList = props.todoList.map((todo, index) => (
    <TodoItem
      key={index}
      index={index}
      title={todo.title}
      deleteTodo={() => deleteTodoHandler(index)}
      completeTodo={() => completeTodoHandler(index)}
      todoDetail={() => todoDetailHandler(index)}
    />
  ));

  return (
    <CssContainer>
      <TodoContainer>
        <WelcomeMessage>
          {username}, what we are going to do today? <br />
          deleted: {deleteCount} completed: {completedCount}
        </WelcomeMessage>
        <GridList>{TodoList}</GridList>
        <Division>
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
        </Division>
      </TodoContainer>
      <Dialog
        open={todoModal.modal}
        handleClose={handleClickModal}
        title={todoModal.title}
        description={todoModal.description}
      />
    </CssContainer>
  );
};

const mapStateToProps = (store) => ({
  todoList: store.todoState.todos,
  deleteCount: store.todoState.deleteCount,
  completedCount: store.todoState.completedCount,
  username: store.loginState.login.username,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ sendTodo, deleteTodo, completeTodo }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Todo));
