import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

export const ColumnContainer = withStyles({
  root: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginLeft: "-25px",
  },
})(Box);
