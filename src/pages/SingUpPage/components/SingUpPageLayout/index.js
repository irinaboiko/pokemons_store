import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  withStyles,
  Typography,
} from "@material-ui/core";
import InputMask from "react-input-mask";

import FilledInput from "../../../../commonComponents/Inputs/FilledInput";
import { ROUTES } from "../../../../routes/routesNames";
import PurpleOutlinedButton from "../../../../commonComponents/Buttons/PurpleOutlinedButton";
import PurpleButton from "../../../../commonComponents/Buttons/PurpleButton";

import styles from "./styles";
import SignUpSuccessModal from "../../../../commonComponents/Modals/SignUpSuccessModal";

const SingUpPageLayout = ({
  classes,
  singUpData,
  handleChange,
  handleReset,
  handleSubmit,
  isShowModal,
  handleCloseModal,
  errors,
  isEmail,
  isFirstNameEmpty,
  isLastNameEmpty,
  isGenderEmpty,
  isPasswordConfirmed,
  isPhoneNumber,
  isSubmitButtonDisabled,
}) => {
  return (
    <Box className={classes.wrapper}>
      <form onSubmit={handleSubmit}>
        <Box className={classes.inputWrapper}>
          <FilledInput
            value={singUpData.email}
            name="email"
            type="email"
            label="Email"
            handleChange={handleChange}
          />
          {!isEmail && (
            <Box className={classes.errorMessage}>Email must be an email</Box>
          )}
        </Box>
        <Box className={classes.inputWrapper}>
          <FilledInput
            value={singUpData.firstName}
            name="firstName"
            type="text"
            label="First Name"
            handleChange={handleChange}
          />
          {isFirstNameEmpty && (
            <Box className={classes.errorMessage}>
              First name must be filled
            </Box>
          )}
        </Box>
        <Box className={classes.inputWrapper}>
          <FilledInput
            value={singUpData.lastName}
            name="lastName"
            type="text"
            label="Last Name"
            handleChange={handleChange}
          />
          {isLastNameEmpty && (
            <Box className={classes.errorMessage}>Last name must be filled</Box>
          )}
        </Box>
        <Box className={classes.selectWrapper}>
          <FormControl className={classes.select}>
            <InputLabel id="demo-simple-select-filled-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              label="Gender"
              name="gender"
              value={singUpData.gender}
              onChange={handleChange}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>
          </FormControl>
          {isGenderEmpty && (
            <Box className={classes.errorMessage}>Gender must be filled</Box>
          )}
        </Box>
        <Box className={classes.inputWrapper}>
          <FilledInput
            value={singUpData.password}
            name="password"
            type="password"
            label="Password"
            handleChange={handleChange}
          />
        </Box>
        <Box className={classes.inputWrapper}>
          <FilledInput
            value={singUpData.passwordConfirmation}
            name="passwordConfirmation"
            type="password"
            label="Confirm Password"
            handleChange={handleChange}
          />
          {!isPasswordConfirmed && (
            <Box className={classes.errorMessage}>Passwords don't match</Box>
          )}
        </Box>
        <Box className={classes.inputWrapper}>
          <FilledInput
            value={singUpData.phone}
            name="phone"
            type="text"
            label="Phone"
            handleChange={handleChange}
          />
          {!isPhoneNumber && (
            <Box className={classes.errorMessage}>
              Phone must be in +375xxxxxxxxx format
            </Box>
          )}
        </Box>
        {/*        <Box>
          <InputMask mask="99 999 99 99" value={singUpData.phone} maskChar=" ">
            {() => <FilledInput />}
          </InputMask>
        </Box>*/}
        <Box className={classes.buttonWrapper}>
          <PurpleButton
            type="submit"
            isButtonDisabled={isSubmitButtonDisabled}
            buttonTitle="Create account"
            disabledButtonTitle="Create account"
          />
        </Box>
        {errors && <Box className={classes.errorsWrapper}>{errors}</Box>}
      </form>
      <Box className={classes.logInWrapper}>
        <Typography className={classes.text} variant="body2">
          Already have an account?
        </Typography>
        <Box>
          <Link to={ROUTES.LOG_IN_PAGE}>
            <PurpleOutlinedButton buttonTitle="LOG IN" />
          </Link>
        </Box>
      </Box>
      <SignUpSuccessModal open={isShowModal} onClose={handleCloseModal} />
    </Box>
  );
};

SingUpPageLayout.propTypes = {
  singUpData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    isShowModal: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
  }),
};

export default withStyles(styles)(SingUpPageLayout);
