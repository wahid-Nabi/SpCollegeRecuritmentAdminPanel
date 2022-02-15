import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import { Paper } from "@material-ui/core";
const WiserBreadcrumb = ({ links }) => {
  return (
    <Paper style={{ marginBottom: "10px", padding: "10px" }} elevation={2}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" to="/">
          Home
        </Link>
        {links &&
          links.map((item, index) => (
            <Link key={index} color="inherit" to={item.link}>
              {item.text}
            </Link>
          ))}
      </Breadcrumbs>
    </Paper>
  );
};

export default WiserBreadcrumb;
