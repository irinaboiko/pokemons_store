import React from "react";
import PropTypes from "prop-types";
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
import StatsTable from "../../Tables/StatsTable";

const ProductDetailsCard = ({
  classes,
  productName,
  productId,
  productImage,
  productPrice,
  actionText,
  actionDisabledText,
  isButtonDisabled,
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
            disabledButtonTitle={actionDisabledText}
            isButtonDisabled={isButtonDisabled}
          />
        </CardActions>
        <Box>
          <TableCharacteristics
            characteristics={abilities}
            tableTitle="Abilities"
            rowTitle="title"
            rowInfo="description"
          />
          <StatsTable
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

ProductDetailsCard.propTypes = {
  productName: PropTypes.string,
  productId: PropTypes.number,
  productImage: PropTypes.string,
  productPrice: PropTypes.number,
  actionText: PropTypes.string.isRequired,
  actionDisabledText: PropTypes.string,
  isButtonDisabled: PropTypes.bool,
  handleOnButtonClick: PropTypes.func,
  abilities: PropTypes.array,
  stats: PropTypes.array,
};

export default React.memo(withStyles(styles)(ProductDetailsCard));
