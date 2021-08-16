import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { GET_PRODUCT_DETAILS_REQUEST } from "../actions";
import ProductDetailsPageLayout from "../components/ProductDetailsPageLayout";
import { useCart } from "../../../hooks";

const ProductDetailsPageContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [
    cartValues,
    setCartValues,
    handleAddToCart,
    handleRemoveFromCart,
    isCartLoading,
  ] = useCart();

  const { productInfo, isLoading } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(GET_PRODUCT_DETAILS_REQUEST(id));
  }, [dispatch]);

  return (
    <ProductDetailsPageLayout
      productInfo={productInfo}
      isLoading={isLoading}
      handleAddToCart={handleAddToCart}
      isCartLoading={isCartLoading}
    />
  );
};

export default ProductDetailsPageContainer;
