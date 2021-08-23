import React, { useCallback, useEffect, useMemo, useState } from "react";
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

  const [touchedValues, setTouchedValues] = useState({
    email: false,
    password: false,
  });

  const handleBlur = useCallback(
    (event) => {
      const { name } = event.target;

      setTouchedValues({
        ...touchedValues,
        [name]: true,
      });
    },
    [touchedValues]
  );

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
    return validator.isEmail(formValues.email);
  }, [formValues]);

  const isTouchedEmail = useMemo(() => {
    return touchedValues.email;
  }, [touchedValues]);

  const isFieldsEmpty = useMemo(() => {
    return Object.keys(formValues).some((key) => {
      return !formValues[key].length;
    });
  }, [formValues]);

  const isSubmitButtonDisabled = !isEmail && !isFieldsEmpty;

  return (
    <LoginPageLayout
      loginData={formValues}
      handleChange={handleChange}
      handleBlur={handleBlur}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      errors={errors}
      isEmail={isEmail}
      isTouchedEmail={isTouchedEmail}
      isSubmitButtonDisabled={isSubmitButtonDisabled}
    />
  );
};

export default LoginPageContainer;
