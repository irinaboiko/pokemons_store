import React from "react";
import PropTypes from "prop-types";
import { Box, withStyles } from "@material-ui/core";

import DefaultBackdrop from "../../../../commonComponents/Spinner/DefaultSpinner";
import ProductDetailsCard from "../../../../commonComponents/Cards/ProductDetailsCard";
import BackButton from "../../../../commonComponents/Buttons/BackButton";

import styles from "./styles";

const ProductDetailsPageLayout = ({
  classes,
  productInfo,
  isLoading,
  handleAddToCart,
  isCartLoading,
  cartItemsList,
}) => {
  const cartInfo = {
    id: productInfo.id,
    name: productInfo.name,
    image: productInfo.image,
    quantity: 1,
    price: productInfo.price,
  };

  const isButtonDisabled = !!cartItemsList.find(
    (cartItem) => cartItem.id === productInfo.id
  );

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
            actionDisabledText="Already in cart"
            isButtonDisabled={isButtonDisabled}
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

ProductDetailsPageLayout.propTypes = {
  productInfo: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  isCartLoading: PropTypes.bool.isRequired,
  cartItemsList: PropTypes.array.isRequired,
};

export default withStyles(styles)(ProductDetailsPageLayout);
