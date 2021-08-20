import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import validator from "validator";

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

  useEffect(() => {
    if (errors) {
      handleReset();
    }
  }, [errors]);

  const isEmail = useMemo(() => {
    validator.isEmail(formValues.email);
  }, [formValues]);

  const isSubmitButtonDisabled = useMemo(() => {
    return Object.keys(formValues).some((key) => {
      return !formValues[key].length;
    });
  }, [formValues]);

  return (
    <LoginPageLayout
      loginData={formValues}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      errors={errors}
      isEmail={isEmail}
      isSubmitButtonDisabled={isSubmitButtonDisabled}
    />
  );
};

export default LoginPageContainer;
