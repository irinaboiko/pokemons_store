import React from "react";
import PropTypes from "prop-types";
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

FilledInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
};

export default React.memo(withStyles(styles)(FilledInput));
