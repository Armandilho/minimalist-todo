import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import { Box, TextField, Button } from "@material-ui/core";

export const CredentialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  @media (min-width: 767px) {
    width: 300px;
  }
`;

export const TypistContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TodoTitle = styled.p`
    font-size: 18px;
`;

export const CssContainer = withStyles({
  root: {
    display: "inline-flex",
  },
})(Box);

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
  root: {},
})(Button);
