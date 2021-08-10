import React from "react";
import AccountPageLayout from "../components";
import { useSelector } from "react-redux";

const AccountPageContainer = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return <AccountPageLayout userInfo={userInfo} />;
};

export default AccountPageContainer;
