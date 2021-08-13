import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

import DefaultBackdrop from "../../../../commonComponents/Spinner/DefaultSpinner";
import ProductDetailsCard from "../../../../commonComponents/ProductCards/ProductDetailsCard";
import BackButton from "../../../../commonComponents/Buttons/BackButton";

const ProductDetailsPageLayout = ({
  productInfo,
  isLoading,
  handleAddToCart,
}) => {
  const cartInfo = {
    id: productInfo.id,
    name: productInfo.name,
    image: productInfo.image,
    quantity: 1,
    price: productInfo.price,
  };

  return (
    <Box>
      {isLoading ? (
        <DefaultBackdrop />
      ) : (
        <>
          <BackButton />
          <ProductDetailsCard
            productName={productInfo.name}
            productId={productInfo.id}
            productImage={productInfo.image}
            productPrice={productInfo.price}
            actionText="Add to cart"
            handleOnButtonClick={() => {
              handleAddToCart(cartInfo);
            }}
            abilities={productInfo.abilities}
            stats={productInfo.stats}
          />
        </>
      )}
    </Box>
  );
};

ProductDetailsPageLayout.propTypes = {};

export default ProductDetailsPageLayout;
