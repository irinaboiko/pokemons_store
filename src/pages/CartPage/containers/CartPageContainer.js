import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useCart } from "../../../hooks";
import CartPageLayout from "../components/CartPageLayout";

const CartPageContainer = () => {
  const dispatch = useDispatch();

  const [cartValues, setCartValues, handleAddToCart] = useCart();

  const { cartInfo, isLoading } = useSelector((state) => state.cart);

  return (
    <CartPageLayout
      handleAddToCart={handleAddToCart}
      cartInfo={cartInfo}
      isLoading={isLoading}
    />
  );
};

export default CartPageContainer;
