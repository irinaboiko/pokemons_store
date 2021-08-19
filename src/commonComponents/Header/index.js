import React, { useCallback } from "react";
import { Badge, Box, withStyles } from "@material-ui/core";

import navItems from "./config/navItems";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./styles";
import PurpleButton from "../Buttons/PurpleButton";
import { ShoppingCart } from "@material-ui/icons";

const Header = ({ classes }) => {
  const history = useHistory();

  let cartProductsQuantity = useSelector(
    (state) => state.cartPage.cartState.quantity
  );

  if (!cartProductsQuantity) {
    cartProductsQuantity = 0;
  }

  const handleLogOut = useCallback(() => {
    localStorage.clear();
    history.go(0);
  }, []);

  return (
    <Box className={classes.headerWrapper}>
      {navItems.map(({ title, path }) => (
        <Link to={path} key={path}>
          <PurpleButton
            buttonTitle={
              title === "Cart" ? (
                <Badge
                  badgeContent={cartProductsQuantity}
                  color="error"
                  showZero
                >
                  <ShoppingCart />
                </Badge>
              ) : (
                title
              )
            }
          />
        </Link>
      ))}
      <PurpleButton handleOnButtonClick={handleLogOut} buttonTitle="Log out" />
    </Box>
  );
};

export default React.memo(withStyles(styles)(Header));
