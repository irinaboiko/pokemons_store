import React from "react";
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
      onChange={onPageChange}
      variant="outlined"
      color="primary"
    />
  );
};

export default React.memo(withStyles(styles)(DefaultPagination));
