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
  addressLine1,
  city,
  country,
}) => {
  return (
    <Card className={classes.cardWrapper}>
      <Typography variant="h2">{`${firstName} ${lastName}`}</Typography>
      <Typography variant="body1">{`Gender: ${gender}`}</Typography>
      <Typography variant="body1">{`Email: ${email}`}</Typography>
      <Typography variant="body1">{`Phone number: ${phone}`}</Typography>
      <Typography variant="body1">{`Address: ${
        addressLine1 ? addressLine1 : "-"
      }, ${city ? city : "-"}, ${country ? country : "-"}`}</Typography>
    </Card>
  );
};

UserCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  addressLine1: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
};

export default React.memo(withStyles(styles)(UserCard));
