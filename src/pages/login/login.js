import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clickButton } from "../../actions";
import { withRouter } from "react-router-dom";

const Login = props => {
  const [inputState, setInputState] = useState("");
  const { login } = props;

  const onChangeHandler = event => {
    setInputState(event.target.value);
  };

  return (
    <div className="App" style={{ paddingTop: "10px" }}>
      <input type="text" onChange={onChangeHandler} />
      <button onClick={() => clickButton(inputState)}>Click me!</button>
      <p>{login}</p>
      <h1>Chamativo</h1>
    </div>
  );
};

const mapStateToProps = store => ({
  login: store.loginState.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
