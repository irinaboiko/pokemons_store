import { Backdrop, CircularProgress } from "@material-ui/core";
import React from "react";

const DefaultBackdrop = (isOpen) => {
  return (
    <Backdrop open={isOpen}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default DefaultBackdrop;
