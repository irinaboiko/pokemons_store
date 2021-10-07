import React from "react";
import { useSelector } from "react-redux";
import { Badge, withStyles } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../routes/routesNames";

import styles from "./styles";

const CartButton = ({ classes }) => {
  const cartProductsQuantity = useSelector(
    (state) => state.cartPage.cartState.quantity
  );

  return (
    <Link to={ROUTES.CART}>
      <Badge badgeContent={cartProductsQuantity} color="error" showZero>
        <ShoppingCart className={classes.cartIcon} />
      </Badge>
    </Link>
  );
};

export default React.memo(withStyles(styles)(CartButton));
