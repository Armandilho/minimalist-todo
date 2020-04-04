import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

export const ColumnContainer = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
})(Box);
