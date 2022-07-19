import React from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  withStyles,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

import styles from "./styles";

const OrderInfoCard = ({
  classes,
  itemsAmount,
  totalPrice,
  dateCreated,
  itemsList,
}) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {dateCreated}
      </AccordionSummary>
      <AccordionDetails classes={{ root: classes.accordionDetails }}>
        <Typography variant="body1">
          {itemsAmount} {itemsAmount === 1 ? "product" : "products"}
        </Typography>
        <Box className={classes.productsWrapper}>
          {itemsList?.map((item) => {
            return (
              <Box className={classes.productWrapper}>
                <img src={item.image} alt={item.name} />
                <Typography variant="body2">{item.name}</Typography>
                <Typography variant="body2">
                  Quantity: {item.quantity}
                </Typography>
                <Typography variant="body2">
                  ${item.quantity * item.price}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Typography variant="body1" className={classes.cartTotal}>
          Total ${totalPrice}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

OrderInfoCard.propTypes = {
  orderId: PropTypes.string.isRequired,
  itemsAmount: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  dateCreated: PropTypes.string.isRequired,
};

export default React.memo(withStyles(styles)(OrderInfoCard));
