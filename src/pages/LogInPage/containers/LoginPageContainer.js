import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoginPageLayout from "../components/LoginPageLayout";
import { useForm } from "../../../hooks";
import { LOGIN_REQUEST } from "../actions";

const LoginPageContainer = () => {
  const dispatch = useDispatch();

  const [formValues, handleChange, handleReset] = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log(formValues);
      dispatch(LOGIN_REQUEST(formValues));
    },
    [dispatch, formValues]
  );

  return (
    <LoginPageLayout
      loginData={formValues}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginPageContainer;
