import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ADD_TO_CART_REQUEST } from "../pages/CartPage/actions";

export default () => {
  const dispatch = useDispatch();

  const isCartLoading = useSelector((state) => state.cartPage.isLoading);

  const handleAddToCart = useCallback(
    (cartInfo) => {
      dispatch(ADD_TO_CART_REQUEST(cartInfo));
    },
    [dispatch]
  );

  return [handleAddToCart, isCartLoading];
};
