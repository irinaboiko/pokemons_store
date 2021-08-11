import React from "react";
import { Box, Button } from "@material-ui/core";

import navItems from "./config/navItems";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartProductsQuantity = useSelector(
    (state) => state.cart.cartInfo.quantity
  );

  console.log(cartProductsQuantity);

  return (
    <Box>
      {navItems.map(({ title, path }) => (
        <Link to={path} key={path}>
          <Button variant="outlined">
            {title === "Cart" ? `${title} (${cartProductsQuantity})` : title}
          </Button>
        </Link>
      ))}
    </Box>
  );
};

export default Header;
