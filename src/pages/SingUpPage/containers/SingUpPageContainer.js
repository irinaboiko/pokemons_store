import React, { useCallback } from "react";

import SingUpPageLayout from "../components/SingUpPageLayout";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "../../../hooks";

const SingUpPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [formValues, handleChange, handleReset] = useForm({
    email: "",
    firstName: "",
    lastName: "",
    address: {
      country: "",
      city: "",
      addressLine1: "",
      addressLine2: "",
    },
    gender: "",
    password: "",
    phone: "",
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log(formValues);
    },
    [dispatch, formValues]
  );

  return (
    <SingUpPageLayout singUpSata={formValues} handleChange={handleChange} />
  );
};

export default SingUpPageContainer;
