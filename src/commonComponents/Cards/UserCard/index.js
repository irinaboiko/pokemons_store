import React from "react";
import PropTypes from "prop-types";
import { Card, Typography, withStyles } from "@material-ui/core";

import styles from "./styles";

const UserCard = ({
  classes,
  firstName,
  lastName,
  gender,
  email,
  phone,
  address,
}) => {
  const formattedAddress = Object.values(address)
    .map((value) => {
      return value ? value : "-";
    })
    .join(", ");

  return (
    <Card className={classes.cardWrapper}>
      <Typography variant="h4" className={classes.caption}>
        <b>{`${firstName} ${lastName}`}</b>
      </Typography>
      <Typography variant="body1">
        <b>Gender: </b>
        {gender}
      </Typography>
      <Typography variant="body1">
        <b>Email: </b>
        {email}
      </Typography>
      <Typography variant="body1">
        <b>Phone: </b>
        {phone}
      </Typography>
      <Typography variant="body1">
        <b>Address: </b>
        {formattedAddress}
      </Typography>
    </Card>
  );
};

UserCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.array.isRequired,
};

export default React.memo(withStyles(styles)(UserCard));
