import React from "react";
import { TextField, withStyles } from "@material-ui/core";

import styles from "./styles";

const FilledInput = ({ value, label, handleChange, classes, type, name }) => {
  return (
    <TextField
      className={classes.input}
      variant="filled"
      value={value}
      label={label}
      onChange={handleChange}
      type={type}
      name={name}
    />
  );
};

export default React.memo(withStyles(styles)(FilledInput));
