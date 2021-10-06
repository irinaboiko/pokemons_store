import React from "react";
import PropTypes from "prop-types";
import { Pagination } from "@material-ui/lab";
import { withStyles } from "@material-ui/core";

import styles from "./styles";

const DefaultPagination = ({
  classes,
  pageCount,
  onPageChange,
  currentPage,
}) => {
  return (
    <Pagination
      classes={{
        root: classes.rootPagination,
      }}
      page={currentPage}
      count={pageCount}
      size="small"
      onChange={onPageChange}
      variant="outlined"
      color="primary"
    />
  );
};

DefaultPagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default React.memo(withStyles(styles)(DefaultPagination));
