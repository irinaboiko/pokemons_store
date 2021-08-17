import React from "react";
import { Box, Card, Typography, withStyles } from "@material-ui/core";

import PurpleButton from "../../Buttons/PurpleButton";

import styles from "./styles";

const CartTotalCard = ({
  classes,
  totalPrice,
  handleOnButtonClick,
  buttonTitle,
}) => {
  return (
    <Card className={classes.cardWrapper}>
      <Box>
        <Typography variant="h4">Total: ${totalPrice}</Typography>
      </Box>
      <Box>
        <PurpleButton
          handleOnButtonClick={handleOnButtonClick}
          buttonTitle={buttonTitle}
        />
      </Box>
    </Card>
  );
};

export default React.memo(withStyles(styles)(CartTotalCard));
