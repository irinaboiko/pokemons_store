import React from "react";
import PropTypes from "prop-types";
import { Box, Button, withStyles } from "@material-ui/core";

import DefaultBackdrop from "../../../../commonComponents/Spinner/DefaultSpinner";
import DefaultPagination from "../../../../commonComponents/Pagination/DefaultPagination";
import ProductCard from "../../../../commonComponents/ProductCards/ProductCart";

import styles from "./styles";

const ProductsPageLayout = ({
  classes,
  products,
  handleGoTOProductDetails,
  isLoading,
  handlePageChange,
  currentPage,
  handleAddToCart,
}) => {
  return (
    <Box>
      {isLoading ? (
        <DefaultBackdrop />
      ) : (
        <Box className={classes.cardsWrapper}>
          {products.map((product) => {
            return (
              <Box key={product.id}>
                <ProductCard
                  handleOnCardClick={() => {
                    handleGoTOProductDetails(product.id);
                  }}
                  productName={product.name}
                  productImage={product.image}
                  productPrice={product.price}
                  actionText="Add to cart"
                  handleOnButtonClick={() => {
                    //console.log(product);
                    handleAddToCart({
                      id: product.id,
                      name: product.name,
                      image: product.image,
                      quantity: 1,
                      price: product.price,
                    });
                  }}
                />
              </Box>
            );
          })}
        </Box>
      )}
      <div>
        <DefaultPagination
          currentPage={currentPage}
          pageCount={45}
          onPageChange={handlePageChange}
        />
      </div>
    </Box>
  );
};

ProductsPageLayout.propTypes = {};

export default React.memo(withStyles(styles)(ProductsPageLayout));
