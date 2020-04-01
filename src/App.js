import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clickButton } from "./actions";
import { withRouter } from "react-router-dom";

const App = props => {
  const [inputState, setInputState] = useState("");
  const { newValue, clickButton, login, history } = props;

  const onChangeHandler = event => {
    setInputState(event.target.value);
  };

  const pushHandler = () => {
    history.push("/login");
  };

  return (
    <div className="App" style={{ paddingTop: "10px" }}>
      <input type="text" onChange={onChangeHandler} />
      <button onClick={() => clickButton(inputState)}>Click me!</button>
      <h1>{newValue}</h1>
      <p>{login}</p>
      <button onClick={() => pushHandler()}>Push to Login</button>
    </div>
  );
};

const mapStateToProps = store => ({
  newValue: store.clickState.newValue,
  login: store.loginState.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
