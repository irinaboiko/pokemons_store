import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  CircularProgress,
  Typography,
  withStyles,
} from "@material-ui/core";

import PurpleButton from "../../../../commonComponents/Buttons/PurpleButton";
import DefaultBackdrop from "../../../../commonComponents/Spinner/DefaultSpinner";
import CartTotalCard from "../../../../commonComponents/Cards/CartTotalCard";
import OrderSuccessModal from "../../../../commonComponents/Modals/OrderSuccessModal";

import styles from "./styles";
import CartProductCart from "../../../../commonComponents/Cards/CartProductCart";

const CartPageLayout = ({
  classes,
  handleIncrementItem,
  handleDecrementItem,
  handleRemoveItem,
  handleCreateOrder,
  cartInfo,
  isLoading,
  isChangeQuantity,
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
                <CartProductCart
                  key={cartItem.id}
                  id={cartItem.id}
                  name={cartItem.name}
                  imageURL={cartItem.image}
                  quantity={cartItem.quantity}
                  price={cartItem.price}
                  isChangeQuantity={isChangeQuantity}
                  handleIncrementItem={handleIncrementItem}
                  handleDecrementItem={handleDecrementItem}
                  handleRemoveItem={handleRemoveItem}
                />
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
  isChangeQuantity: PropTypes.bool.isRequired,
  isShowModal: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  itemsList: PropTypes.array.isRequired,
};

export default React.memo(withStyles(styles)(CartPageLayout));
