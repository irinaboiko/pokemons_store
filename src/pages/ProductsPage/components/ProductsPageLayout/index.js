import React from "react";
import PropTypes from "prop-types";
import { Box, withStyles } from "@material-ui/core";

import DefaultBackdrop from "../../../../commonComponents/Spinner/DefaultSpinner";
import DefaultPagination from "../../../../commonComponents/Pagination/DefaultPagination";
import ProductCard from "../../../../commonComponents/Cards/ProductCard";

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
  cartItemsList,
}) => {
  return (
    <Box>
      {isLoading ? (
        <DefaultBackdrop />
      ) : (
        <>
          <Box className={classes.cardsWrapper}>
            {products.map((product) => {
              const isButtonDisabled = !!cartItemsList.find(
                (cartItem) => cartItem.id === product.id
              );

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
                    actionDisabledText="Already in cart"
                    isButtonDisabled={isButtonDisabled}
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

ProductsPageLayout.propTypes = {
  products: PropTypes.array.isRequired,
  handleGoTOProductDetails: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  isCartLoading: PropTypes.bool.isRequired,
  cartItemsList: PropTypes.array.isRequired,
};

export default React.memo(withStyles(styles)(ProductsPageLayout));
