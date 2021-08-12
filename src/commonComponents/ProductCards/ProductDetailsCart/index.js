import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  withStyles,
} from "@material-ui/core";

import styles from "./styles";

const ProductDetailsCard = ({
  classes,
  productName,
  productId,
  productImage,
  productPrice,
  actionText,
  handleOnButtonClick,
}) => {
  return (
    <Card className={classes.cart}>
      <CardMedia image={productImage} component="img" title={productName} />
      <CardContent>
        <Typography variant="h2">{productName}</Typography>
        <Typography variant="body1">{`Product ID: ${productId}`}</Typography>
        <Typography variant="h4">{`$${productPrice}`}</Typography>
        <CardActions>
          <Button
            onClick={handleOnButtonClick}
            variant="outlined"
            color="primary"
          >
            {actionText}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default React.memo(withStyles(styles)(ProductDetailsCard));
