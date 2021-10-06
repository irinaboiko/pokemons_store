import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Card, Typography, withStyles } from "@material-ui/core";

import styles from "./styles";

const CartProductCart = ({
  classes,
  id,
  name,
  imageURL,
  quantity,
  price,
  handleIncrementItem,
  handleDecrementItem,
  handleRemoveItem,
}) => {
  return (
    <Card key={id} className={classes.cartItem}>
      <Box className={classes.itemInfo}>
        <img src={imageURL} alt={name} />
        <Typography className={classes.productName} variant="h5">
          {name}
        </Typography>
      </Box>
      <Box className={classes.itemButtons}>
        <Box className={classes.quantityButtons}>
          <span
            className={classes.buttonQuantity}
            onClick={() => {
              handleDecrementItem(id);
            }}
          >
            -
          </span>
          <span className={classes.itemQuantity}>{quantity}</span>
          <span
            className={classes.buttonQuantity}
            onClick={() => {
              handleIncrementItem(id);
            }}
          >
            +
          </span>
        </Box>
        <Typography variant="h6" className={classes.itemPrice}>
          {`$${quantity * price}`}
        </Typography>
        <span
          className={classes.removeButton}
          onClick={() => {
            handleRemoveItem(id);
          }}
        >
          Remove
        </span>
      </Box>
    </Card>
  );
};

CartProductCart.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  isChangeQuantity: PropTypes.bool.isRequired,
  handleIncrementItem: PropTypes.func.isRequired,
  handleDecrementItem: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};

export default React.memo(withStyles(styles)(CartProductCart));
