import React from "react";
import NavList from "./NavList";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Divider, IconButton } from "@material-ui/core";
import clsx from "clsx";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const drawerWidth = 230;
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: "none",
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  topButtonDiv: {
    backgroundColor: "#0b827f",
  },
  leftButton: {
    color: "#fff",
  },
  list: {
    overflowY: "auto",
    margin: 0,
    padding: 0,
    listStyle: "none",
    height: "100%",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
  campusText: { color: "#fff", textTransform: "uppercase" },
}));

const SideNav = (props) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={props.open}
      classes={{
        paper: clsx(classes.drawerPaper, classes.list),
      }}
    >
      <div className={classes.topButtonDiv}>
        <IconButton
          className={classes.leftButton}
          onClick={props.handleDrawerClose}
        >
          <ChevronLeftIcon />
        </IconButton>
        <span className={classes.campusText}>Campus Manager</span>
      </div>
      <Divider />
      <NavList
        closeDrawer={props.isMobile ? props.handleDrawerClose : undefined}
      />
    </Drawer>
  );
};

export default SideNav;
