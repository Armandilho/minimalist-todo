import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

export const TypistContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CssContainer = withStyles({
  root: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    height: "100vh",
  },
})(Container);
