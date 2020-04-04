import { withStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

export const ColumnContainer = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
})(Container);
