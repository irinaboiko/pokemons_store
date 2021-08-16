import React from "react";
import PropTypes from "prop-types";
import { Box, Card, Typography, withStyles } from "@material-ui/core";

import PurpleButton from "../../../../commonComponents/Buttons/PurpleButton";
import DefaultBackdrop from "../../../../commonComponents/Spinner/DefaultSpinner";

import styles from "./styles";

const CartPageLayout = ({
  classes,
  handleIncrementItems,
  handleRemoveFromCart,
  cartInfo,
  isLoading,
  itemsList,
}) => {
  //const cartItems = cartInfo.itemsList;

  //console.log(cartItems);

  return (
    <>
      {isLoading ? (
        <DefaultBackdrop />
      ) : (
        <Box>
          <Typography variant="h3" align="center">
            Cart
          </Typography>
          <Box>
            {itemsList?.map((cartItem, index) => {
              return (
                <Card key={cartItem.id} className={classes.cartItem}>
                  <Box className={classes.itemInfo}>
                    <img src={cartItem.image} alt={cartItem.name} />
                    <Typography variant="h5" className={classes.itemTitle}>
                      {cartItem.name}
                    </Typography>
                  </Box>
                  <Box className={classes.itemButtons}>
                    <Box className={classes.quantityButtons}>
                      <PurpleButton
                        handleOnButtonClick={() => {
                          console.log(index);
                        }}
                        buttonTitle="Minus"
                      />
                      <span className={classes.itemQuantity}>
                        {cartItem.quantity}
                      </span>
                      <PurpleButton
                        handleOnButtonClick={() => {
                          handleIncrementItems(cartItem.id);
                        }}
                        buttonTitle="Plus"
                      />
                    </Box>
                    <PurpleButton
                      handleOnButtonClick={() => {
                        handleRemoveFromCart(cartItem.id);
                      }}
                      buttonTitle="Remove"
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" className={classes.itemPrice}>
                      <p>{`$${cartItem.price}`}</p>
                    </Typography>
                  </Box>
                </Card>
              );
            })}
          </Box>
          <Box>
            <Typography variant="h4" className={classes.totalPrice}>
              Total: {cartInfo.totalPrice}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

CartPageLayout.propTypes = {};

export default React.memo(withStyles(styles)(CartPageLayout));
