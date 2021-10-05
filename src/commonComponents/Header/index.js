import React from "react";
import { Box, withStyles } from "@material-ui/core";

import CartButton from "../Buttons/CartButton";
import MainNavigation from "../Navigation/MainNavigation";

import styles from "./styles";

const Header = ({ classes }) => {
  return (
    <Box className={classes.headerWrapper}>
      <MainNavigation />
      <CartButton />
    </Box>
  );
};

export default React.memo(withStyles(styles)(Header));
