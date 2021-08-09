import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

import DefaultBackdrop from "../../../../commonComponents/Spinner/DefaultSpinner";

const ProductDetailsPageLayout = ({ productInfo, isLoading }) => {
  return (
    <Box>
      {isLoading ? (
        <DefaultBackdrop />
      ) : (
        <>
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
        </>
      )}
    </Box>
  );
};

ProductDetailsPageLayout.propTypes = {};

export default ProductDetailsPageLayout;
