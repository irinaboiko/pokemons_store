import React, { useCallback, useEffect, useMemo, useState } from "react";
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

  const [touchedValues, setTouchedValues] = useState({
    email: false,
    firstName: false,
    lastName: false,
    gender: false,
    password: false,
    passwordConfirmation: false,
    phone: false,
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
      console.log(formValues);

      //dispatch(SIGNUP_REQUEST(formValues));
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
    return validator.isEmpty(formValues.firstName, {
      ignore_whitespace: true,
    });
  }, [formValues]);

  const isLastNameEmpty = useMemo(() => {
    return validator.isEmpty(formValues.lastName, {
      ignore_whitespace: true,
    });
  }, [formValues]);

  const isGenderEmpty = useMemo(() => {
    return validator.isEmpty(formValues.gender);
  }, [formValues]);

  const isPasswordEmpty = useMemo(() => {
    return validator.isEmpty(formValues.password);
  }, [formValues]);

  const isPasswordConfirmed = useMemo(() => {
    return formValues.password === formValues.passwordConfirmation;
  }, [formValues]);

  const isPhoneNumber = useMemo(() => {
    return validator.isMobilePhone(formValues.phone, ["be-BY"]);
  }, [formValues]);

  const isFieldsEmpty = useMemo(() => {
    return Object.keys(formValues).some((key) => {
      return !formValues[key].length;
    });
  }, [formValues]);

  const isTouchedEmail = useMemo(() => {
    return touchedValues.email;
  }, [touchedValues]);

  const isTouchedFirstName = useMemo(() => {
    return touchedValues.firstName;
  }, [touchedValues]);

  const isTouchedLastName = useMemo(() => {
    return touchedValues.lastName;
  }, [touchedValues]);

  const isTouchedGender = useMemo(() => {
    return touchedValues.gender;
  }, [touchedValues]);

  console.log(isTouchedGender);

  const isTouchedPassword = useMemo(() => {
    return touchedValues.password;
  }, [touchedValues]);

  const isTouchedPasswordConfirmation = useMemo(() => {
    return touchedValues.passwordConfirmation;
  }, [touchedValues]);

  const isTouchedPhone = useMemo(() => {
    return touchedValues.phone;
  }, [touchedValues]);

  const isSubmitButtonDisabled =
    !isEmail ||
    isFirstNameEmpty ||
    isLastNameEmpty ||
    isGenderEmpty ||
    !isPasswordConfirmed ||
    !isPhoneNumber ||
    isFieldsEmpty;

  const handleCloseModal = useCallback(() => {
    dispatch(CLOSE_MODAL());
    history.push(ROUTES.LOG_IN_PAGE);
  }, [dispatch]);

  return (
    <SingUpPageLayout
      singUpData={formValues}
      handleChange={handleChange}
      handleBlur={handleBlur}
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
      isPasswordEmpty={isPasswordEmpty}
      isPasswordConfirmed={isPasswordConfirmed}
      isPhoneNumber={isPhoneNumber}
      isTouchedEmail={isTouchedEmail}
      isTouchedFirstName={isTouchedFirstName}
      isTouchedLastName={isTouchedLastName}
      isTouchedGender={isTouchedGender}
      isTouchedPassword={isTouchedPassword}
      isTouchedPasswordConfirmation={isTouchedPasswordConfirmation}
      isTouchedPhone={isTouchedPhone}
      isSubmitButtonDisabled={isSubmitButtonDisabled}
    />
  );
};

export default SingUpPageContainer;
