import React from "react";
import { Box, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import navItems from "../../Header/config/navItems";

import styles from "./styles";

const DesktopNavigation = ({ classes }) => {
  return (
    <Box>
      {navItems.map(({ title, path }) => (
        <Link className={classes.menuItem} to={path} key={path}>
          {title}
        </Link>
      ))}
    </Box>
  );
};

export default React.memo(withStyles(styles)(DesktopNavigation));
