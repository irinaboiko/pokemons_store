import React from "react";
import PropTypes from "prop-types";
import { Box, Card, Typography, withStyles } from "@material-ui/core";

import PurpleButton from "../../../../commonComponents/Buttons/PurpleButton";
import DefaultBackdrop from "../../../../commonComponents/Spinner/DefaultSpinner";
import CartTotalCard from "../../../../commonComponents/Cards/CartTotalCard";
import OrderSuccessModal from "../../../../commonComponents/Modals/OrderSuccessModal";

import styles from "./styles";

const CartPageLayout = ({
  classes,
  handleIncrementItem,
  handleDecrementItem,
  handleRemoveItem,
  handleCreateOrder,
  cartInfo,
  isLoading,
  isShowModal,
  handleCloseModal,
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
            {itemsList?.map((cartItem) => {
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
                      {`$${cartItem.quantity * cartItem.price}`}
                    </Typography>
                  </Box>
                </Card>
              );
            })}
          </Box>
          {itemsList.length < 1 ? (
            <Card className={classes.cartEmpty}>
              <Typography variant="h6">Cart is empty</Typography>
            </Card>
          ) : (
            <CartTotalCard
              totalPrice={cartInfo.totalPrice}
              handleOnButtonClick={handleCreateOrder}
              buttonTitle="Create order"
            />
          )}
          <OrderSuccessModal open={isShowModal} onClose={handleCloseModal} />
        </Box>
      )}
    </>
  );
};

CartPageLayout.propTypes = {
  handleIncrementItem: PropTypes.func.isRequired,
  handleDecrementItem: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleCreateOrder: PropTypes.func.isRequired,
  cartInfo: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isShowModal: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  itemsList: PropTypes.array.isRequired,
};

export default React.memo(withStyles(styles)(CartPageLayout));
