import React from "react";
import PropTypes from "prop-types";
import { Backdrop, CircularProgress } from "@material-ui/core";

const DefaultBackdrop = (isOpen) => {
  return (
    <Backdrop open={isOpen}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

DefaultBackdrop.propTypes = {
  isOpen: PropTypes.bool,
};

export default React.memo(DefaultBackdrop);
