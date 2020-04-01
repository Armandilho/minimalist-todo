import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sendLogin } from "../../actions";
import { withRouter } from "react-router-dom";
import { TextField } from "@material-ui/core";

const Login = props => {
  const [username, setUsername] = useState("");
  const { login } = props;

  const onChangeHandler = event => {
    setUsername(event.target.value);
  };

  return (
    <div className="App" style={{ paddingTop: "10px" }}>
      <form>
        <TextField
          onChange={onChangeHandler}
          id="standard-basic"
          label="Standard"
          value={username}
        />
        <button onClick={() => sendLogin(username)}>Logar</button>
        <h1>{login}</h1>
        <p>{username}</p>
        <h2>Mu</h2>
      </form>
    </div>
  );
};

const mapStateToProps = store => ({
  login: store.loginState.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ sendLogin }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
