import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ADD_TO_CART_REQUEST } from "../pages/CartPage/actions";

export default () => {
  const dispatch = useDispatch();

  //const isCartLoading = useSelector((state) => state.cart.isLoading);

  const handleCreateOrder = useCallback(
    (requestBody) => {
      dispatch(ADD_TO_CART_REQUEST(requestBody));
    },
    [dispatch]
  );

  return [
    handleCreateOrder,
    //isCartLoading
  ];
};
