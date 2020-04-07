import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import { Container, TextField, Button } from "@material-ui/core";

export const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Division = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 767px) {
    width: 440px;
    height: 250px;
  }
`;

export const TodoDivision = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const WelcomeMessage = styled.p`
  text-align: center;
  line-height: 24px;
`;

export const CssContainer = withStyles({
  root: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    height: "100vh",
  },
})(Container);

export const CssTextField = withStyles({
  root: {
    "& .MuiInput-root:hover::before": {
      borderColor: "rgba(0, 0, 0, 0.54)",
    },
    "& label.Mui-focused": {
      color: "rgba(0, 0, 0, 0.54)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgba(0, 0, 0, 0.54)",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(0, 0, 0, 0.54)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(0, 0, 0, 0.54)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(0, 0, 0, 0.54)",
      },
    },
    margin: "10px 0",
  },
})(TextField);

export const CssButton = withStyles({
  root: {
    marginTop: "20px",
  },
})(Button);
