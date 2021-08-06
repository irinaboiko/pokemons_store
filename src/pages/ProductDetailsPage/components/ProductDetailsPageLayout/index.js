import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

const ProductDetailsPageLayout = ({ productInfo }) => {
  console.log(productInfo);
  return (
    <Box>
      <div>
        <img src={productInfo.image} alt="product image" />
      </div>
      <div>Name: {productInfo.name}</div>
      <div>Id: {productInfo.id}</div>
      <div>Price: {productInfo.price}</div>
      <div>
        Abilities:
        {productInfo.abilities.map((ability) => {
          return (
            <div>
              <div>{ability.title}</div>
              <div>{ability.description}</div>
            </div>
          );
        })}
      </div>
      <div>
        Stats:
        {productInfo.stats.map((stat) => {
          return (
            <div>
              <div>{stat.title}</div>
              <div>{stat.value}</div>
            </div>
          );
        })}
      </div>
    </Box>
  );
};

ProductDetailsPageLayout.propTypes = {};

export default ProductDetailsPageLayout;
