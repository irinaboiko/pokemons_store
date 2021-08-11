import React from "react";
import PropTypes from "prop-types";
import { Box, Button } from "@material-ui/core";
import DefaultBackdrop from "../../../../commonComponents/Spinner/DefaultSpinner";
import DefaultPagination from "../../../../commonComponents/Pagination/DefaultPagination";

const ProductsPageLayout = ({
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
        <>
          {products.map((product) => {
            return (
              <Box key={product.id}>
                <Box
                  onClick={() => {
                    handleGoTOProductDetails(product.id);
                  }}
                >
                  <div>
                    <img src={product.image} alt="product image" />
                  </div>
                  <p>Name: {product.name}</p>
                  <p>Price: {product.price}</p>
                </Box>
                <Button
                  onClick={() => {
                    handleAddToCart({
                      id: product.id,
                      name: product.name,
                      image: product.image,
                      quantity: 1,
                      price: product.price,
                    });
                  }}
                  variant="outlined"
                  color="primary"
                >
                  Add To Cart
                </Button>
              </Box>
            );
          })}
        </>
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

export default ProductsPageLayout;
