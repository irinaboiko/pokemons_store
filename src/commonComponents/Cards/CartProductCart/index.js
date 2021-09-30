import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  CircularProgress,
  Typography,
  withStyles,
} from "@material-ui/core";

import PurpleButton from "../../Buttons/PurpleButton";

import styles from "./styles";

const CartProductCart = ({
  classes,
  id,
  name,
  imageURL,
  quantity,
  price,
  isChangeQuantity,
  handleIncrementItem,
  handleDecrementItem,
  handleRemoveItem,
}) => {
  return (
    <Card key={id} className={classes.cartItem}>
      <Box className={classes.itemInfo}>
        <img src={imageURL} alt={name} />
        <Typography variant="h5">{name}</Typography>
      </Box>
      <Box className={classes.itemButtons}>
        {isChangeQuantity ? (
          <CircularProgress />
        ) : (
          <>
            <Box className={classes.quantityButtons}>
              <PurpleButton
                handleOnButtonClick={() => {
                  handleDecrementItem(id);
                }}
                buttonTitle="-"
              />
              <span className={classes.itemQuantity}>{quantity}</span>
              <PurpleButton
                handleOnButtonClick={() => {
                  handleIncrementItem(id);
                }}
                buttonTitle="+"
              />
            </Box>
            <PurpleButton
              handleOnButtonClick={() => {
                handleRemoveItem(id);
              }}
              buttonTitle="Remove"
            />
          </>
        )}
      </Box>
      <Box>
        <Typography variant="h6" className={classes.itemPrice}>
          {`$${quantity * price}`}
        </Typography>
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
