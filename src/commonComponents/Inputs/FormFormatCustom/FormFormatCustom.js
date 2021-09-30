import MaskedInput from "react-text-mask";
import { phoneNumberMask } from "../../../utils/regularExpressions/phoneNumberMask";
import React from "react";

const FormFormatCustom = ({ inputRef, ...other }) => {
  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={phoneNumberMask}
      placeholderChar={"\u2000"}
      showMask
    />
  );
};

export default FormFormatCustom;
