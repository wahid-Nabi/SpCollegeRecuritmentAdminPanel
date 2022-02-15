import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  footer: {
    bottom: "0",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.footer} position="static">
      <Toolbar style={{ minHeight: "48px" }}>
        <Typography noWrap>
          &copy; Copyright to CodeMites - {new Date().getFullYear()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
