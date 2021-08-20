import React, { useCallback, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import validator from "validator";

import SingUpPageLayout from "../components/SingUpPageLayout";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks";
import { SIGNUP_REQUEST } from "../actions";
import { CLOSE_MODAL } from "../../SingUpPage/actions";
import { ROUTES } from "../../../routes/routesNames";

const SingUpPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isLoading, isShowModal, errors } = useSelector(
    (state) => state.signUpPage
  );

  const [formValues, handleChange, handleReset] = useForm({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    password: "",
    passwordConfirmation: "",
    phone: "",
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(SIGNUP_REQUEST(formValues));
    },
    [dispatch, formValues]
  );

  useEffect(() => {
    if (errors) {
      handleReset();
    }
  }, [errors]);

  const isEmail = useMemo(
    () => validator.isEmail(formValues.email),
    [formValues]
  );

  const isFirstNameEmpty = useMemo(() => {
    validator.isEmpty(formValues.firstName, {
      ignore_whitespace: true,
    });
  }, [formValues]);

  const isLastNameEmpty = useMemo(() => {
    validator.isEmpty(formValues.lastName, {
      ignore_whitespace: true,
    });
  }, [formValues]);

  const isGenderEmpty = useMemo(() => {
    validator.isEmpty(formValues.gender);
  }, [formValues]);

  const isPasswordConfirmed = useMemo(() => {
    return formValues.password === formValues.passwordConfirmation;
  }, [formValues]);

  const isPhoneNumber = useMemo(() => {
    validator.isMobilePhone(formValues.phone, ["be-BY"]);
  }, [formValues]);

  const isSubmitButtonDisabled = useMemo(() => {
    return Object.keys(formValues).some((key) => {
      return !formValues[key].length;
    });
  }, [formValues]);

  const handleCloseModal = useCallback(() => {
    dispatch(CLOSE_MODAL());
    history.push(ROUTES.LOG_IN_PAGE);
  }, [dispatch]);

  return (
    <SingUpPageLayout
      singUpData={formValues}
      handleChange={handleChange}
      handleReset={handleReset}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      isShowModal={isShowModal}
      handleCloseModal={handleCloseModal}
      errors={errors}
      isEmail={isEmail}
      isFirstNameEmpty={isFirstNameEmpty}
      isLastNameEmpty={isLastNameEmpty}
      isGenderEmpty={isGenderEmpty}
      isPasswordConfirmed={isPasswordConfirmed}
      isPhoneNumber={isPhoneNumber}
      isSubmitButtonDisabled={isSubmitButtonDisabled}
    />
  );
};

export default SingUpPageContainer;
