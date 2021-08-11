import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

const CartPageLayout = ({ handleAddToCart, cartInfo, isLoading }) => {
  const cartItems = cartInfo.itemsList;

  return (
    <Box>
      <Typography variant="body1">Cart Page</Typography>
      <Box>
        {cartItems?.map((cartItem) => {
          return (
            <Box key={cartItem.id}>
              <img src={cartItem.image} alt={cartItem.name} />
              <p>{cartItem.name}</p>
              <p>Quantity: {cartItem.quantity}</p>
              <p>{cartItem.price}</p>
            </Box>
          );
        })}
      </Box>
      <Box>Total: {cartInfo.totalPrice}</Box>
    </Box>
  );
};

CartPageLayout.propTypes = {};

export default CartPageLayout;
