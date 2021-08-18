import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

import UserCard from "../../../../commonComponents/Cards/UserCard";
import OrderInfoCard from "../../../../commonComponents/Cards/OrderInfoCard";

const AccountPageLayout = ({ userInfo, ordersList }) => {
  const { firstName, lastName, gender, email, phone, address } = userInfo;
  const { addressLine1, city, country } = address;

  return (
    <Box>
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
      {ordersList?.map((order) => {
        const itemsAmount = order.itemsList.reduce(
          (accumulator, currentValue, index) => {
            return accumulator + order.itemsList[index].quantity;
          },
          0
        );

        return (
          <OrderInfoCard
            key={order._id}
            orderId={order._id}
            totalPrice={order.totalPrice}
            itemsAmount={itemsAmount}
          />
        );
      })}
    </Box>
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
};

export default AccountPageLayout;
