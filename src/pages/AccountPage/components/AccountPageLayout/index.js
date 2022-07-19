import React from "react";
import PropTypes from "prop-types";
import { Box, Card, withStyles } from "@material-ui/core";
import moment from "moment";

import UserCard from "../../../../commonComponents/Cards/UserCard";
import OrderInfoCard from "../../../../commonComponents/Cards/OrderInfoCard";

import styles from "./styles";
import DefaultBackdrop from "../../../../commonComponents/Spinner/DefaultSpinner";

const AccountPageLayout = ({ classes, userInfo, ordersList, isLoading }) => {
  const { firstName, lastName, gender, email, phone, address } = userInfo;

  return (
    <>
      {isLoading ? (
        <DefaultBackdrop />
      ) : (
        <Box>
          <UserCard
            firstName={firstName}
            lastName={lastName}
            gender={gender}
            email={email}
            phone={phone}
            address={address}
          />
          <Card className={classes.cardWrapper}>
            {ordersList?.map((order) => {
              const itemsList = order.itemsList;

              const itemsAmount = order.itemsList.reduce(
                (accumulator, currentValue, index) => {
                  return accumulator + order.itemsList[index].quantity;
                },
                0
              );

              const orderCreationTime = order.createdAt;
              const formattedOrderCreationTime = moment(
                orderCreationTime
              ).format("MMMM Do YYYY, h:mm:ss a");

              return (
                <OrderInfoCard
                  key={order._id}
                  totalPrice={order.totalPrice}
                  itemsAmount={itemsAmount}
                  dateCreated={formattedOrderCreationTime}
                  itemsList={itemsList}
                />
              );
            })}
          </Card>
        </Box>
      )}
    </>
  );
};

AccountPageLayout.propTypes = {
  userInfo: PropTypes.shape({
    address: PropTypes.object,
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
  ordersList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default React.memo(withStyles(styles)(AccountPageLayout));
