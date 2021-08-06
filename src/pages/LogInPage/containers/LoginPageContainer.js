import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import LoginPageLayout from "../components/LoginPageLayout";
import { useForm } from "../../../hooks";
import { LOGIN_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routesNames";

const LoginPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isAuth, isLoading, errors } = useSelector((state) => state.auth);

  const [formValues, handleChange, handleReset] = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(LOGIN_REQUEST(formValues));
    },
    [dispatch, formValues]
  );

  useEffect(() => {
    if (isAuth) {
      history.push(ROUTES.PRODUCTS);
    }
  }, [isAuth]);

  return (
    <LoginPageLayout
      loginData={formValues}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default LoginPageContainer;
