import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  parent: {
    position: "relative",
    width: "inherit",
    height: "86.3vh",
    zIndex: 0,
  },
  backdrop: {
    position: "absolute",
    backgroundColor: "#eeeeee",
  },
});
const PageLoader = ({ open }) => {
  const classes = useStyles();

  return (
    <div className={classes.parent}>
      <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress color="inherit" />
        <p style={{ marginLeft: "8px" }}>Loading ...</p>
      </Backdrop>
    </div>
  );
};

export default PageLoader;
