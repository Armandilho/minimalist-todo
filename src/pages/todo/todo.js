import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TodoItem from "../../components/todoItem/todoItem";
import GridList from "../../components/gridList/gridList";

const Todo = (props) => {
  const fakeData = [
    { title: "Teste1" },
    { title: "Teste2" },
    { title: "Teste3" },
  ];

  return (
    <GridList>
      <TodoItem index={1} title={fakeData[0].title} />
      <TodoItem index={2} title={fakeData[2].title} />
    </GridList>
  );
};

const mapStateToProps = (store) => ({
  login: store.loginState.login,
});

export default withRouter(connect(mapStateToProps)(Todo));
