import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

export const ColumnContainer = withStyles({
  root: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginLeft: "-25px",
    overflow: "auto",
    maxHeight: "171px",
    "&:hover": {},
    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  },
})(Box);
