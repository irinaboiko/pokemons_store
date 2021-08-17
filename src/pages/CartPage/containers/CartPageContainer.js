import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useCart, useOrder } from "../../../hooks";
import CartPageLayout from "../components/CartPageLayout";
import {
  DECREASE_ITEM_QUANTITY_REQUEST,
  INCREASE_ITEM_QUANTITY_REQUEST,
  REMOVE_ITEM_FROM_CART_REQUEST,
} from "../actions";
import { CREATE_ORDER_REQUEST } from "../../AccountPage/actions";

const CartPageContainer = () => {
  const dispatch = useDispatch();

  const { cartState, isLoading } = useSelector((state) => state.cart);
  const { itemsList } = cartState;

  //const [handleCreateOrder] = useOrder();

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

  const requestBody = {
    customerId: cartState.customerId,
    totalPrice: cartState.totalPrice,
    itemsList: cartState.itemsList,
  };

  const handleCreateOrder = useCallback(() => {
    //console.log(requestBody);
    //console.log(cartState);
    dispatch(CREATE_ORDER_REQUEST(requestBody));
  }, [dispatch, itemsList]);

  return (
    <CartPageLayout
      handleIncrementItem={handleIncrementItem}
      handleDecrementItem={handleDecrementItem}
      handleRemoveItem={handleRemoveItem}
      handleCreateOrder={handleCreateOrder}
      cartInfo={cartState}
      isLoading={isLoading}
      itemsList={itemsList}
    />
  );
};

export default CartPageContainer;
