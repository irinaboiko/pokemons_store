import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import ProductsPageLayout from "../components/ProductsPageLayout";
import { GET_PRODUCTS_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routesNames";

const ProductsPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { productsList, isLoading } = useSelector(
    (state) => state.productsPage
  );

  const handleGoTOProductDetails = useCallback((id) => {
    history.push(`${ROUTES.PRODUCTS}/${id}`);
  }, []);

  useEffect(() => {
    dispatch(GET_PRODUCTS_REQUEST());
  }, [dispatch]);

  return (
    <ProductsPageLayout
      products={productsList}
      handleGoTOProductDetails={handleGoTOProductDetails}
      isLoading={isLoading}
    />
  );
};

export default ProductsPageContainer;
