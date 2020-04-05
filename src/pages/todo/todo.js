import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sendTodo, deleteTodo } from "../../actions";
import { withRouter } from "react-router-dom";
import TodoItem from "../../components/todoItem/todoItem";
import GridList from "../../components/gridList/gridList";
import Dialog from "../../components/dialog/dialog";
import { CssContainer, CssTextField, TodoContainer, CssButton } from "./styles";

const Todo = (props) => {
  const [todoValue, setTodoValue] = useState({
    title: "",
    description: "",
  });

  const [modal, setModal] = useState(true);

  const handleClickModal = () => {
    setModal((prevState) => !prevState);
  };

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

  const completeTodo = () => {
    console.log("Completed");
  };

  const todoDetail = () => {
    console.log("Detail");
  };

  const TodoList = props.todoList.map((todo, index) => (
    <TodoItem
      key={index}
      title={todo.title}
      deleteTodo={() => deleteTodoHandler(index)}
      completeTodo={completeTodo}
      todoDetail={todoDetail}
    />
  ));

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
      {/* Todo, mapear e passar title e description para esse modal */}
      <Dialog open={modal} handleClose={handleClickModal} />
    </CssContainer>
  );
};

const mapStateToProps = (store) => ({
  todoList: store.todoState.todos,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ sendTodo, deleteTodo }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Todo));
