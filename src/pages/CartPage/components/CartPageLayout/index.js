import React from "react";
import PropTypes from "prop-types";
import { Box, Card, Typography, withStyles } from "@material-ui/core";

import PurpleButton from "../../../../commonComponents/Buttons/PurpleButton";
import DefaultBackdrop from "../../../../commonComponents/Spinner/DefaultSpinner";

import styles from "./styles";
import CartTotalCard from "../../../../commonComponents/Cards/CartTotalCard";

const CartPageLayout = ({
  classes,
  handleIncrementItem,
  handleDecrementItem,
  handleRemoveItem,
  handleCreateOrder,
  cartInfo,
  isLoading,
  itemsList,
}) => {
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
                    <Typography variant="h5">{cartItem.name}</Typography>
                  </Box>
                  <Box className={classes.itemButtons}>
                    <Box className={classes.quantityButtons}>
                      <PurpleButton
                        handleOnButtonClick={() => {
                          handleDecrementItem(cartItem.id);
                        }}
                        buttonTitle="Minus"
                      />
                      <span className={classes.itemQuantity}>
                        {cartItem.quantity}
                      </span>
                      <PurpleButton
                        handleOnButtonClick={() => {
                          handleIncrementItem(cartItem.id);
                        }}
                        buttonTitle="Plus"
                      />
                    </Box>
                    <PurpleButton
                      handleOnButtonClick={() => {
                        handleRemoveItem(cartItem.id);
                      }}
                      buttonTitle="Remove"
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" className={classes.itemPrice}>
                      <p>{`$${cartItem.quantity * cartItem.price}`}</p>
                    </Typography>
                  </Box>
                </Card>
              );
            })}
          </Box>
          <CartTotalCard
            totalPrice={cartInfo.totalPrice}
            handleOnButtonClick={handleCreateOrder}
            buttonTitle="Create order"
          />
        </Box>
      )}
    </>
  );
};

CartPageLayout.propTypes = {};

export default React.memo(withStyles(styles)(CartPageLayout));
