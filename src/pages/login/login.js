import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sendLogin } from "../../actions";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

const App = props => {
  const [username, setUsername] = useState("");
  const { sendLogin, login } = props;

  const onChangeHandler = event => {
    setUsername(event.target.value);
  };

  return (
    <div className="App" style={{ paddingTop: "10px" }}>
      <TextField
        id="standard-basic"
        label="Standard"
        onChange={onChangeHandler}
        value={username}
      />
      <button onClick={() => sendLogin(username)}>Manda</button>
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
