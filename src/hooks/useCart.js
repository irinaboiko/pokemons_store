import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import {
  ADD_TO_CART_REQUEST,
  REMOVE_ITEM_FROM_CART_REQUEST,
} from "../pages/CartPage/actions";

export default (initialValues) => {
  const dispatch = useDispatch();

  //const [cartValues, setCartValues] = useState(initialValues);

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
    //cartValues,
    //setCartValues,
    handleAddToCart,
    handleRemoveFromCart,
  ];
};
