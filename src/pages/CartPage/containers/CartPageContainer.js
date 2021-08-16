import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useCart } from "../../../hooks";
import CartPageLayout from "../components/CartPageLayout";
import { INCREASE_ITEM_QUANTITY_REQUEST } from "../actions";

const CartPageContainer = () => {
  const dispatch = useDispatch();

  const [
    cartValues,
    setCartValues,
    handleAddToCart,
    handleRemoveFromCart,
    isCartLoading,
  ] = useCart();

  const { cartInfo, isLoading } = useSelector((state) => state.cart);
  const { itemsList } = cartInfo;

  console.log(itemsList);

  const handleIncrementItems = useCallback(
    (id) => {
      console.log(id);
      const elem = itemsList.find((item) => item.id === id);

      console.log(elem);

      const requestBody = {
        id: elem.id,
        quantity: elem.quantity + 1,
      };

      dispatch(INCREASE_ITEM_QUANTITY_REQUEST(requestBody));
    },
    [dispatch, itemsList]
  );

  return (
    <CartPageLayout
      handleIncrementItems={handleIncrementItems}
      handleRemoveFromCart={handleRemoveFromCart}
      cartInfo={cartInfo}
      isLoading={isLoading}
      itemsList={itemsList}
    />
  );
};

export default CartPageContainer;
