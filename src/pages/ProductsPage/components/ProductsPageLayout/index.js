import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

const ProductsPageLayout = ({
  products,
  handleGoTOProductDetails,
  isLoading,
}) => {
  console.log(products);
  return (
    <Box>
      {products.map((product) => {
        //console.log(product.id);
        return (
          <Box
            onClick={() => {
              //console.log(product.id);
              handleGoTOProductDetails(product.id);
            }}
            key={product.id}
          >
            <div>
              <img src={product.image} alt="product image" />
            </div>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
          </Box>
        );
      })}
    </Box>
  );
};

ProductsPageLayout.propTypes = {};

export default ProductsPageLayout;
