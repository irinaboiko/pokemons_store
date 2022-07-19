import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { GET_PRODUCT_DETAILS_REQUEST } from "../actions";
import ProductDetailsPageLayout from "../components/ProductDetailsPageLayout";
import { useCart } from "../../../hooks";

const ProductDetailsPageContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [handleAddToCart, isCartLoading] = useCart();

  const { productInfo, isLoading } = useSelector(
    (state) => state.productDetailsPage
  );
  const { cartState } = useSelector((state) => state.cartPage);
  const cartItemsList = cartState.itemsList;

  useEffect(() => {
    dispatch(GET_PRODUCT_DETAILS_REQUEST(id));
  }, [dispatch]);

  return (
    <ProductDetailsPageLayout
      productInfo={productInfo}
      isLoading={isLoading}
      handleAddToCart={handleAddToCart}
      isCartLoading={isCartLoading}
      cartItemsList={cartItemsList}
    />
  );
};

export default ProductDetailsPageContainer;
