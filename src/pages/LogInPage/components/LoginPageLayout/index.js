import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import FilledInput from "../../../../commonComponents/Inputs/FilledInput";
import { ROUTES } from "../../../../routes/routesNames";
import PurpleButton from "../../../../commonComponents/Buttons/PurpleButton";

import styles from "./styles";

const LoginPageLayout = ({
  classes,
  loginData,
  handleChange,
  handleBlur,
  handleSubmit,
  errors,
  isEmail,
  isTouchedEmail,
  isSubmitButtonDisabled,
}) => {
  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.text} variant="h5">
        Please login to your account to continue
      </Typography>
      <form className={classes.form} action="" onSubmit={handleSubmit}>
        <Box className={classes.inputWrapper}>
          <FilledInput
            value={loginData.email}
            name="email"
            type="email"
            handleChange={handleChange}
            handleBlur={handleBlur}
            label="Email"
          />
          {!isEmail && isTouchedEmail && (
            <Box className={classes.errorMessage}>Email must be an email</Box>
          )}
        </Box>
        <Box className={classes.inputWrapper}>
          <FilledInput
            value={loginData.password}
            name="password"
            type="password"
            handleChange={handleChange}
            handleBlur={handleBlur}
            label="Password"
          />
        </Box>
        <Box className={classes.inputWrapper}>
          <PurpleButton
            type="submit"
            isButtonDisabled={isSubmitButtonDisabled}
            buttonTitle="LOG IN"
            disabledButtonTitle="LOG IN"
          />
        </Box>
        {errors && <Box className={classes.errorsWrapper}>{errors}</Box>}
      </form>
      <Box className={classes.signUpWrapper}>
        <Typography className={classes.text} variant="body2">
          Don't have an account?
        </Typography>
        <Box className={classes.inputWrapper}>
          <Link to={ROUTES.SING_UP_PAGE}>
            <PurpleButton buttonTitle="SING UP" isOutlinedButton={true} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

LoginPageLayout.propTypes = {
  loginData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isEmail: PropTypes.bool.isRequired,
  isTouchedEmail: PropTypes.bool.isRequired,
  isSubmitButtonDisabled: PropTypes.bool.isRequired,
};

export default withStyles(styles)(LoginPageLayout);
