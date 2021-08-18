import React from "react";
import PropTypes from "prop-types";
import { Card, Typography, withStyles } from "@material-ui/core";

import styles from "./styles";

const OrderInfoCard = ({ classes, orderId, itemsAmount, totalPrice }) => {
  return (
    <Card className={classes.cardWrapper}>
      <Typography variant="body1">Order № {orderId}</Typography>
      <Typography variant="body1">
        {itemsAmount} {itemsAmount === 1 ? "product" : "products"}
      </Typography>
      <Typography variant="body1">Total price ${totalPrice}</Typography>
    </Card>
  );
};

OrderInfoCard.propTypes = {
  orderId: PropTypes.string.isRequired,
  itemsAmount: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default React.memo(withStyles(styles)(OrderInfoCard));
