import React from "react";
import { TextField, withStyles } from "@material-ui/core";

import styles from "./styles";

const OutlinedInput = ({ value, label, handleChange, classes, type, name }) => {
  return (
    <TextField
      className={classes.input}
      variant="outlined"
      value={value}
      label={label}
      onChange={handleChange}
      type={type}
      name={name}
    />
  );
};

export default withStyles(styles)(OutlinedInput);
