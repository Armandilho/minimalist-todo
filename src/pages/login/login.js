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
    username: ""
  });

  const onChangeHandler = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const loginHandler = username => {
    const { sendLogin, history } = props;
    sendLogin(username);
    history.push("/Todo");
  };

  const validationHandler = e => {
    //Todo Colocar validções básicas no login!
    if (!e.target.value) {
      console.log("Não tem valor!");
    }
  };

  return (
    <CssContainer>
      <CredentialsContainer>
        <TypistContainer>
          <Typist cursor={{ show: false }}>A minimalist todo app...</Typist>
        </TypistContainer>
        <CssTextField
          id="usernameInput"
          label="username"
          onChange={onChangeHandler}
          value={credentials.username}
          name="username"
          onBlur={validationHandler}
          autoComplete="off"
        />
        <CssButton onClick={() => loginHandler(credentials)} variant="outlined">
          NEXT
        </CssButton>
      </CredentialsContainer>
    </CssContainer>
  );
};

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ sendLogin }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
