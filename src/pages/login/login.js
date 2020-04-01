import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sendLogin } from "../../actions";
import { withRouter } from "react-router-dom";

const App = props => {
  const [inputState, setInputState] = useState("");
  const { sendLogin, login } = props;

  const onChangeHandler = event => {
    setInputState(event.target.value);
  };

  return (
    <div className="App" style={{ paddingTop: "10px" }}>
      <input type="text" onChange={onChangeHandler} />
      <button onClick={() => sendLogin(inputState)}>Manda</button>
      <p>{login}</p>
    </div>
  );
};

const mapStateToProps = store => ({
  login: store.loginState.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ sendLogin }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
