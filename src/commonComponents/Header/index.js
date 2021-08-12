import React, { useCallback } from "react";
import { Box, Button } from "@material-ui/core";

import navItems from "./config/navItems";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from "../../routes/routesNames";

const Header = () => {
  const history = useHistory();

  const cartProductsQuantity = useSelector(
    (state) => state.cart.cartInfo.quantity
  );

  const handleLogOut = useCallback(() => {
    localStorage.clear();
    history.push(ROUTES.LOG_IN_PAGE);
  }, []);

  //console.log(cartProductsQuantity);

  return (
    <Box>
      {navItems.map(({ title, path }) => (
        <Link to={path} key={path}>
          <Button variant="outlined">
            {title === "Cart" ? `${title} (${cartProductsQuantity})` : title}
          </Button>
        </Link>
      ))}
      {/*<Button variant="outlined" onClick={handleLogOut}>
        Log out
      </Button>*/}
    </Box>
  );
};

export default Header;
