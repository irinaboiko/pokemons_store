import React from "react";
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
      <Typography variant="body1">{`Address: ${addressLine1}, ${city}, ${country}`}</Typography>
    </Card>
  );
};

export default React.memo(withStyles(styles)(UserCard));
