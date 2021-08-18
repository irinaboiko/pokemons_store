import React from "react";
import PropTypes from "prop-types";
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
  actionDisabledText,
  isButtonDisabled,
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
          disabledButtonTitle={actionDisabledText}
          isButtonDisabled={isButtonDisabled}
        />
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  productImage: PropTypes.string,
  productPrice: PropTypes.number.isRequired,
  actionText: PropTypes.string.isRequired,
  actionDisabledText: PropTypes.string,
  isButtonDisabled: PropTypes.bool,
  handleOnCardClick: PropTypes.func.isRequired,
  handleOnButtonClick: PropTypes.func,
};

export default React.memo(withStyles(styles)(ProductCard));
