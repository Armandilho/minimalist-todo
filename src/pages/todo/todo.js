import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { CssContainer, TypistContainer } from "./styles";
import Typist from "react-typist";

const Todo = props => {
  const { login } = props;
  console.log(login);
  return (
    <CssContainer>
      <TypistContainer>
        <Typist cursor={{ show: false }}>Wellcome {login}</Typist>
      </TypistContainer>
    </CssContainer>
  );
};

const mapStateToProps = store => ({
  login: store.loginState.login
});

export default withRouter(connect(mapStateToProps)(Todo));
