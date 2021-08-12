import React from "react";
import PropTypes from "prop-types";
import { Box, Button } from "@material-ui/core";

import DefaultBackdrop from "../../../../commonComponents/Spinner/DefaultSpinner";
import ProductDetailsCard from "../../../../commonComponents/ProductCards/ProductDetailsCart";

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
          <ProductDetailsCard
            productName={productInfo.name}
            productId={productInfo.id}
            productImage={productInfo.image}
            productPrice={productInfo.price}
            actionText="Add to cart"
            //handleOnButtonClick
          />
          <div>
            <img src={productInfo.image} alt="product image" />
          </div>
          <div>Name: {productInfo.name}</div>
          <div>Id: {productInfo.id}</div>
          <div>Price: {productInfo.price}</div>
          <div>
            Abilities:
            {productInfo.abilities?.map((ability) => {
              return (
                <div key={ability.title}>
                  <div>{ability.title}</div>
                  <div>{ability.description}</div>
                </div>
              );
            })}
          </div>
          <div>
            Stats:
            {productInfo.stats?.map((stat) => {
              return (
                <div key={stat.title}>
                  <div>{stat.title}</div>
                  <div>{stat.value}</div>
                </div>
              );
            })}
          </div>
          <Button
            onClick={() => {
              handleAddToCart(cartInfo);
            }}
            variant="outlined"
            color="primary"
          >
            Add To Cart
          </Button>
        </>
      )}
    </Box>
  );
};

ProductDetailsPageLayout.propTypes = {};

export default ProductDetailsPageLayout;
