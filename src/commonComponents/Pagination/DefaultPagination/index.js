import React from "react";
import { Pagination } from "@material-ui/lab";

const DefaultPagination = ({ pageCount, onPageChange, currentPage }) => {
  return (
    <Pagination
      page={currentPage}
      count={pageCount}
      onChange={onPageChange}
      variant="outlined"
      color="primary"
    />
  );
};

export default DefaultPagination;
