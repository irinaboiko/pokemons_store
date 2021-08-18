import React from "react";
import PropTypes from "prop-types";
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

CartTotalCard.propTypes = {
  totalPrice: PropTypes.string.isRequired,
  handleOnButtonClick: PropTypes.func,
  buttonTitle: PropTypes.string.isRequired,
};

export default React.memo(withStyles(styles)(CartTotalCard));
