import React from "react";
import { TextField, withStyles } from "@material-ui/core";

import styles from "./styles";
import FormFormatCustom from "../FormFormatCustom/FormFormatCustom";

const PhoneMaskedInput = ({ classes, value, handleChange, handleBlur }) => {
  return (
    <TextField
      className={classes.input}
      label="Phone"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      variant="filled"
      name="phone"
      id="formatted-numberformat-input"
      InputProps={{
        inputComponent: FormFormatCustom,
      }}
    />
  );
};

export default React.memo(withStyles(styles)(PhoneMaskedInput));
