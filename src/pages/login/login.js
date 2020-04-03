import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sendLogin } from "../../actions";
import { withRouter } from "react-router-dom";
import {
  CredentialsContainer,
  CssContainer,
  TypistContainer,
  CssTextField,
  CssButton
} from "./styles";
import Typist from "react-typist";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const { sendLogin } = props;

  const onChangeHandler = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <CssContainer>
      <CredentialsContainer>
        <TypistContainer>
          <Typist cursor={{ show: false }}>A minimalist app...</Typist>
        </TypistContainer>
        <CssTextField
          id="usernameInput"
          label="username"
          onChange={onChangeHandler}
          value={credentials.username}
          name="username"
        />
        <CssTextField
          id="passwordInput"
          label="password"
          onChange={onChangeHandler}
          value={credentials.password}
          name="password"
          type="password"
        />
        <CssButton
          onClick={() => sendLogin(credentials.username)}
          variant="outlined"
        >
          LOGIN
        </CssButton>
      </CredentialsContainer>
    </CssContainer>
  );
};

const mapStateToProps = store => ({
  login: store.loginState.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ sendLogin }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
