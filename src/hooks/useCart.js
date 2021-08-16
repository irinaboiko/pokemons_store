import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ADD_TO_CART_REQUEST,
  REMOVE_ITEM_FROM_CART_REQUEST,
} from "../pages/CartPage/actions";

export default (initialValues) => {
  const dispatch = useDispatch();

  const [cartValues, setCartValues] = useState(initialValues);

  const isCartLoading = useSelector((state) => state.cart.isLoading);

  const handleAddToCart = useCallback(
    (cartInfo) => {
      dispatch(ADD_TO_CART_REQUEST(cartInfo));
    },
    [dispatch]
  );

  const handleRemoveFromCart = useCallback(
    (id) => {
      dispatch(REMOVE_ITEM_FROM_CART_REQUEST(id));
    },
    [dispatch]
  );

  return [
    cartValues,
    setCartValues,
    handleAddToCart,
    handleRemoveFromCart,
    isCartLoading,
  ];
};
