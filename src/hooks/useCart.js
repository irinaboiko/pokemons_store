import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { ADD_TO_CART_REQUEST } from "../pages/CartPage/actions";

export default (initialValues) => {
  const dispatch = useDispatch();

  const [cartValues, setCartValues] = useState(initialValues);

  const handleAddToCart = useCallback(
    (cartInfo) => {
      //console.log(cartInfo);
      dispatch(ADD_TO_CART_REQUEST(cartInfo));
    },
    [cartValues]
  );

  return [cartValues, setCartValues, handleAddToCart];
};
