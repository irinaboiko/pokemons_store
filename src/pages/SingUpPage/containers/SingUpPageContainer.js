import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";

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
    />
  );
};

export default SingUpPageContainer;
