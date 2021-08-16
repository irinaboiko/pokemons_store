import React from "react";
import { Button, withStyles } from "@material-ui/core";

import styles from "./styles";

const PurpleButton = ({ classes, handleOnButtonClick, buttonTitle, type }) => {
  return (
    <Button
      className={classes.PurpleButton}
      variant="outlined"
      onClick={handleOnButtonClick}
      type={type}
    >
      {buttonTitle}
    </Button>
  );
};

export default React.memo(withStyles(styles)(PurpleButton));
