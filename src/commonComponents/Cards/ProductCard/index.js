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

import PurpleButton from "../../Buttons/PurpleButton";
import styles from "./styles";

const ProductCard = ({
  classes,
  productName,
  productImage,
  productPrice,
  actionText,
  handleOnCardClick,
  handleOnButtonClick,
}) => {
  return (
    <Card className={classes.cart}>
      <CardActionArea onClick={handleOnCardClick}>
        <CardMedia image={productImage} component="img" title={productName} />
        <CardContent>
          <Typography variant="h5">{productName}</Typography>
          <Typography
            variant="body1
          "
          >{`$${productPrice}`}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <PurpleButton
          handleOnButtonClick={handleOnButtonClick}
          buttonTitle={actionText}
        />
      </CardActions>
    </Card>
  );
};

export default React.memo(withStyles(styles)(ProductCard));
