import React from "react";
import PropTypes from "prop-types";
import { Box, withStyles } from "@material-ui/core";

import DefaultBackdrop from "../../../../commonComponents/Spinner/DefaultSpinner";
import ProductDetailsCard from "../../../../commonComponents/ProductCards/ProductDetailsCard";
import BackButton from "../../../../commonComponents/Buttons/BackButton";

import styles from "./styles";

const ProductDetailsPageLayout = ({
  classes,
  productInfo,
  isLoading,
  handleAddToCart,
  isCartLoading,
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
        <Box className={classes.productWrapper}>
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
          {isCartLoading && <DefaultBackdrop />}
        </Box>
      )}
    </Box>
  );
};

ProductDetailsPageLayout.propTypes = {};

export default React.memo(withStyles(styles)(ProductDetailsPageLayout));
