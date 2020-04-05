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
  CssButton,
} from "./styles";
import Typist from "react-typist";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
  });

  const [error, setError] = useState(false);

  const onChangeHandler = (e) => {
    if (error) {
      setError(false);
    }
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const loginHandler = (username) => {
    if (!error) {
      const { sendLogin, history } = props;
      sendLogin(username);
      history.push("/Todo");
    } else {
      setError(true);
    }
  };

  const validationHandler = (e) => {
    if (!e.target.value) {
      setError(true);
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
          error={error}
          helperText={error ? "Preencha esse campo" : ""}
        />
        <CssButton onClick={() => loginHandler(credentials)} variant="outlined">
          NEXT
        </CssButton>
      </CredentialsContainer>
    </CssContainer>
  );
};

const mapStateToProps = (store) => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ sendLogin }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
