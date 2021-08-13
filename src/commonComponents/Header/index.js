import React, { useCallback } from "react";
import { Box, Button, withStyles } from "@material-ui/core";

import navItems from "./config/navItems";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./styles";

const Header = ({ classes }) => {
  const history = useHistory();

  const cartProductsQuantity = useSelector(
    (state) => state.cart.cartInfo.quantity
  );

  const handleLogOut = useCallback(() => {
    localStorage.clear();
    history.go(0);
  }, []);

  return (
    <Box className={classes.headerWrapper}>
      {navItems.map(({ title, path }) => (
        <Link to={path} key={path}>
          <Button variant="outlined">
            {title === "Cart" ? `${title} (${cartProductsQuantity})` : title}
          </Button>
        </Link>
      ))}
      <Button variant="outlined" onClick={handleLogOut}>
        Log out
      </Button>
    </Box>
  );
};

export default React.memo(withStyles(styles)(Header));
