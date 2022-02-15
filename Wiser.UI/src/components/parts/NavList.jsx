import React, { useState } from "react";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { NavLink } from "react-router-dom";

import {
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Collapse,
  makeStyles,
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import { mainRoutes, manageRoutes } from "../../utils/routes";

const useStyles = makeStyles({
  listItem: {
    paddingTop: "5px",
    paddingBottom: "5px",
  },
  iistItemIcon: {
    minWidth: "21px",
  },
  iconText: {
    fontSize: "1rem",
  },
  linkText: {
    fontSize: ".9rem",
    fontWeight: "bold",
    color: "#07000094",
  },
  submenuList: {
    paddingLeft: "1.8rem",
    paddingTop: "5px",
    paddingBottom: "5px",
  },
  listTag: {
    padding: ".7rem .6rem 0",
    margin: "0",
    textTransform: "uppercase",
    color: "#0909098f",
  },
});

const NavList = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState("");

  const classes = useStyles();

  const renderSubmenu = (list, menuIndex) => {
    if (list && list.length) {
      return (
        <Collapse in={submenuIndex === menuIndex} timeout={350} unmountOnExit>
          <List onClick={props.closeDrawer} disablePadding>
            {list.map((item, index) => (
              <ListItem
                activeClassName="Mui-selected"
                to={item.to}
                component={NavLink}
                key={index}
                classes={{ root: classes.submenuList }}
                button
              >
                <ListItemIcon className={classes.iistItemIcon}>
                  <Icon className={classes.iconText}>{item.icon}</Icon>
                </ListItemIcon>
                <ListItemText
                  disableTypography={true}
                  className={classes.linkText}
                  primary={item.text}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      );
    } else {
      return "";
    }
  };

  return (
    <>
      <p className={classes.listTag}>General</p>
      <List onClick={props.closeDrawer}>
        {mainRoutes.map((item, index) => (
          <ListItem
            activeClassName="Mui-selected"
            to={item.to}
            component={NavLink}
            classes={{ root: classes.listItem }}
            button
            key={index}
          >
            <ListItemIcon className={classes.iistItemIcon}>
              <Icon className={classes.iconText}>{item.icon}</Icon>
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              className={classes.linkText}
              primary={item.text}
            />
          </ListItem>
        ))}
      </List>
      <p className={classes.listTag}>Management</p>
      <List>
        {manageRoutes.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              // component={NavLink}
              // to={item.to}
              classes={{ root: classes.listItem }}
              onClick={() => {
                if (submenuIndex === index) setSubmenuIndex("");
                else setSubmenuIndex(index);
              }}
              button
              key={index}
            >
              <ListItemIcon className={classes.iistItemIcon}>
                <Icon className={classes.iconText}>{item.icon}</Icon>
              </ListItemIcon>
              <ListItemText
                disableTypography={true}
                className={classes.linkText}
                primary={item.text}
              />
              {item.subMenus && item.subMenus.length ? (
                submenuIndex === index ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : (
                ""
              )}
            </ListItem>

            {renderSubmenu(item.subMenus, index)}
          </React.Fragment>
        ))}
      </List>
    </>
  );
};

export default NavList;
