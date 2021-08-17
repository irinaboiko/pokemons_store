import React from "react";
import PropTypes from "prop-types";

import UserCard from "../../../../commonComponents/Cards/UserCard";

const AccountPageLayout = ({ userInfo, ordersList }) => {
  const { firstName, lastName, gender, email, phone, address } = userInfo;
  const { addressLine1, city, country } = address;

  //console.log(ordersList);

  return (
    <UserCard
      firstName={firstName}
      lastName={lastName}
      gender={gender}
      email={email}
      phone={phone}
      addressLine1={addressLine1}
      city={city}
      country={country}
    />
  );
};

AccountPageLayout.propTypes = {};

export default AccountPageLayout;
