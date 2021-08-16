import React from "react";
import PropTypes from "prop-types";
import { Box, withStyles } from "@material-ui/core";

import DefaultBackdrop from "../../../../commonComponents/Spinner/DefaultSpinner";
import DefaultPagination from "../../../../commonComponents/Pagination/DefaultPagination";
import ProductCard from "../../../../commonComponents/ProductCards/ProductCard";

import styles from "./styles";

const ProductsPageLayout = ({
  classes,
  products,
  handleGoTOProductDetails,
  isLoading,
  handlePageChange,
  currentPage,
  handleAddToCart,
  isCartLoading,
}) => {
  return (
    <Box>
      {isLoading ? (
        <DefaultBackdrop />
      ) : (
        <>
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
          <Box className={classes.paginationWrapper}>
            <DefaultPagination
              currentPage={currentPage}
              pageCount={45}
              onPageChange={handlePageChange}
            />
          </Box>
          {isCartLoading && <DefaultBackdrop />}
        </>
      )}
    </Box>
  );
};

ProductsPageLayout.propTypes = {};

export default React.memo(withStyles(styles)(ProductsPageLayout));
