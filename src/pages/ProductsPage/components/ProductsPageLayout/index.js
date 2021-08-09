import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import DefaultBackdrop from "../../../../commonComponents/Spinner/DefaultSpinner";
import DefaultPagination from "../../../../commonComponents/Pagination/DefaultPagination";

const ProductsPageLayout = ({
  products,
  handleGoTOProductDetails,
  isLoading,
  handlePageChange,
  currentPage,
}) => {
  //console.log(products);
  return (
    <Box>
      {isLoading ? (
        <DefaultBackdrop />
      ) : (
        <>
          {products.map((product) => {
            return (
              <Box
                onClick={() => {
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
