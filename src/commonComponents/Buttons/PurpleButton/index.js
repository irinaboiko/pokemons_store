import React from "react";
import PropTypes from "prop-types";
import { Button, withStyles } from "@material-ui/core";

import styles from "./styles";

const PurpleButton = ({
  classes,
  handleOnButtonClick,
  buttonTitle,
  disabledButtonTitle,
  type,
  isButtonDisabled,
  isOutlinedButton,
}) => {
  return (
    <Button
      className={`${classes.purpleButton} ${
        isOutlinedButton && classes.purpleOutlinedButton
      }`}
      disabled={isButtonDisabled}
      variant="outlined"
      onClick={handleOnButtonClick}
      type={type}
    >
      {isButtonDisabled ? disabledButtonTitle : buttonTitle}
    </Button>
  );
};

PurpleButton.propTypes = {
  handleOnButtonClick: PropTypes.func,
  buttonTitle: PropTypes.string,
  disabledButtonTitle: PropTypes.string,
  type: PropTypes.string,
  isButtonDisabled: PropTypes.bool,
};

export default React.memo(withStyles(styles)(PurpleButton));
