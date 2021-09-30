import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartPageLayout from "../components/CartPageLayout";
import {
  CLOSE_MODAL,
  DECREASE_ITEM_QUANTITY_REQUEST,
  INCREASE_ITEM_QUANTITY_REQUEST,
  REMOVE_ITEM_FROM_CART_REQUEST,
} from "../actions";
import { CREATE_ORDER_REQUEST } from "../../AccountPage/actions";

const CartPageContainer = () => {
  const dispatch = useDispatch();

  const { cartState, isLoading, isChangeQuantity, isShowModal } = useSelector(
    (state) => state.cartPage
  );
  const { itemsList } = cartState;

  const handleIncrementItem = useCallback(
    (id) => {
      const cartItem = itemsList.find((item) => item.id === id);

      const requestBody = {
        id: cartItem.id,
        quantity: cartItem.quantity + 1,
      };

      dispatch(INCREASE_ITEM_QUANTITY_REQUEST(requestBody));
    },
    [dispatch, itemsList]
  );

  const handleDecrementItem = useCallback(
    (id) => {
      const cartItem = itemsList.find((item) => item.id === id);

      if (cartItem.quantity > 1) {
        const requestBody = {
          id: cartItem.id,
          quantity: cartItem.quantity - 1,
        };

        dispatch(DECREASE_ITEM_QUANTITY_REQUEST(requestBody));
      }
    },
    [dispatch, itemsList]
  );

  const handleRemoveItem = useCallback(
    (id) => {
      dispatch(REMOVE_ITEM_FROM_CART_REQUEST(id));
    },
    [dispatch, itemsList]
  );

  const handleCreateOrder = useCallback(() => {
    const requestBody = {
      customerId: cartState.customerId,
      totalPrice: cartState.totalPrice,
      itemsList: cartState.itemsList,
    };

    dispatch(CREATE_ORDER_REQUEST(requestBody));
  }, [dispatch, itemsList]);

  const handleCloseModal = useCallback(() => {
    dispatch(CLOSE_MODAL());
  }, [dispatch]);

  return (
    <CartPageLayout
      handleIncrementItem={handleIncrementItem}
      handleDecrementItem={handleDecrementItem}
      handleRemoveItem={handleRemoveItem}
      handleCreateOrder={handleCreateOrder}
      cartInfo={cartState}
      isLoading={isLoading}
      isChangeQuantity={isChangeQuantity}
      isShowModal={isShowModal}
      handleCloseModal={handleCloseModal}
      itemsList={itemsList}
    />
  );
};

export default CartPageContainer;
