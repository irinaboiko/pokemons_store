import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { GET_PRODUCT_DETAILS_REQUEST } from "../actions";
import ProductDetailsPageLayout from "../components/ProductDetailsPageLayout";

const ProductDetailsPageContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { productInfo, isLoading } = useSelector((state) => state.productDetailsPage);

  useEffect(() => {
    dispatch(GET_PRODUCT_DETAILS_REQUEST(id));
  }, [dispatch]);

  return <ProductDetailsPageLayout productInfo={productInfo} isLoading={isLoading} />;
};

export default ProductDetailsPageContainer;
