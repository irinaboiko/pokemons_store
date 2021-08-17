import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  withStyles,
} from "@material-ui/core";

import styles from "./styles";
import TableCharacteristics from "../../Tables/CharacteristicsTable";
import PurpleButton from "../../Buttons/PurpleButton";

const ProductDetailsCard = ({
  classes,
  productName,
  productId,
  productImage,
  productPrice,
  actionText,
  handleOnButtonClick,
  abilities,
  stats,
}) => {
  return (
    <Card className={classes.cart}>
      <CardMedia image={productImage} component="img" title={productName} />
      <CardContent>
        <Typography variant="h2">{productName}</Typography>
        <Typography variant="body1">{`Product ID: ${productId}`}</Typography>
        <Typography variant="h4">{`$${productPrice}`}</Typography>
        <CardActions>
          <PurpleButton
            handleOnButtonClick={handleOnButtonClick}
            buttonTitle={actionText}
          />
        </CardActions>
        <Box>
          <TableCharacteristics
            characteristics={abilities}
            tableTitle="Abilities"
            rowTitle="title"
            rowInfo="description"
          />
          <TableCharacteristics
            characteristics={stats}
            tableTitle="Stats"
            rowTitle="title"
            rowInfo="value"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default React.memo(withStyles(styles)(ProductDetailsCard));
