import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

const AccountPageLayout = ({ userInfo }) => {
  return (
    <Box>
      <Typography variant="h2">{`${userInfo.firstName} ${userInfo.lastName}`}</Typography>
      <Typography variant="body1">{`Gender: ${userInfo.gender}`}</Typography>
      <Typography variant="body1">{`Email: ${userInfo.email}`}</Typography>
      <Typography variant="body1">{`Phone number: ${userInfo.phone}`}</Typography>
      <Typography variant="body1">{`Address: ${userInfo.address.addressLine1}, ${userInfo.address.city}, ${userInfo.address.country}`}</Typography>
    </Box>
  );
};

AccountPageLayout.propTypes = {};

export default AccountPageLayout;
