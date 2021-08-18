import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import AccountPageLayout from "../components/AccountPageLayout";
import { GET_ORDERS_INFO_REQUEST } from "../actions";

const AccountPageContainer = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const { orders } = useSelector((state) => state.accountPage);

  useEffect(() => {
    dispatch(GET_ORDERS_INFO_REQUEST());
  }, [dispatch]);

  return <AccountPageLayout userInfo={userInfo} ordersList={orders} />;
};

export default AccountPageContainer;
