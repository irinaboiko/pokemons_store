import React from "react";
import PropTypes from "prop-types";
import { Button, withStyles } from "@material-ui/core";

import styles from "./styles";

const PurpleOutlinedButton = ({
  classes,
  handleOnClick,
  buttonTitle,
  type,
}) => {
  return (
    <Button
      className={classes.PurpleOutlinedButton}
      variant="outlined"
      onClick={handleOnClick}
      type={type}
    >
      {buttonTitle}
    </Button>
  );
};

PurpleOutlinedButton.propTypes = {
  handleOnClick: PropTypes.func,
  buttonTitle: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default React.memo(withStyles(styles)(PurpleOutlinedButton));
