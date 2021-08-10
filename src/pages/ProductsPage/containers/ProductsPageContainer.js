import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import ProductsPageLayout from "../components/ProductsPageLayout";
import { CHANGE_PAGE, GET_PRODUCTS_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routesNames";

const ProductsPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { productsList, currentPage, isLoading } = useSelector(
    (state) => state.productsPage
  );

  const handleGoTOProductDetails = useCallback(
    (id) => {
      history.push(`${ROUTES.PRODUCTS}/${id}`);
    },
    [history]
  );

  const handleAddToCart = useCallback();

  const handlePageChange = useCallback(
    (event, page) => {
      if (page !== currentPage) {
        dispatch(CHANGE_PAGE(page));
      }
    },
    [currentPage]
  );

  useEffect(() => {
    dispatch(GET_PRODUCTS_REQUEST(currentPage));
  }, [dispatch, currentPage]);

  return (
    <ProductsPageLayout
      products={productsList}
      handleGoTOProductDetails={handleGoTOProductDetails}
      isLoading={isLoading}
      handlePageChange={handlePageChange}
      currentPage={currentPage}
    />
  );
};

export default ProductsPageContainer;
