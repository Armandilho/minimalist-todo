import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clickButton } from "./actions";

const App = props => {
  const [inputState, setInputState] = useState("");
  const { newValue, clickButton } = props;

  const onChangeHandler = event => {
    setInputState(event.target.value);
  };

  return (
    <div className="App" style={{ paddingTop: "10px" }}>
      <input type="text" onChange={onChangeHandler} />
      <button onClick={() => clickButton(inputState)}>Click me!</button>
      <h1>{newValue}</h1>
    </div>
  );
};

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
