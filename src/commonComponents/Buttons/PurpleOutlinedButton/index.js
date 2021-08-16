import React from "react";
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

export default React.memo(withStyles(styles)(PurpleOutlinedButton));
