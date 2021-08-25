import React from "react";
import MaskedInput from "react-text-mask";
import { TextField, withStyles } from "@material-ui/core";

import styles from "./styles";

const FormFormatCustom = ({ inputRef, ...other }) => {
  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "+",
        "3",
        "7",
        "5",
        "(",
        /[1-9]/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
};

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
