import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography } from "@material-ui/core";

const CartPageLayout = ({
  handleAddToCart,
  handleRemoveFromCart,
  cartInfo,
  isLoading,
}) => {
  const cartItems = cartInfo.itemsList;

  return (
    <Box>
      <Typography variant="body1">Cart Page</Typography>
      <Box>
        {cartItems?.map((cartItem, index) => {
          return (
            <Box key={cartItem.id}>
              <img src={cartItem.image} alt={cartItem.name} />
              <p>{cartItem.name}</p>
              <p>Quantity: {cartItem.quantity}</p>
              <p>{cartItem.price}</p>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  console.log(index);
                }}
              >
                Minus
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  console.log(index);
                }}
              >
                Remove
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  console.log(index);
                }}
              >
                Plus
              </Button>
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
