import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Box, withStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useCallback } from "react";

import styles from "./styles";

const BackButton = ({ classes }) => {
  const history = useHistory();

  const handleOnBackButtonClick = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Box onClick={handleOnBackButtonClick} className={classes.buttonContainer}>
      <ArrowBackIcon />
    </Box>
  );
};

export default React.memo(withStyles(styles)(BackButton));
