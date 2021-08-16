import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import styles from "./styles";
import FilledInput from "../../../../commonComponents/Inputs/FilledInput";
import { ROUTES } from "../../../../routes/routesNames";
import PurpleButton from "../../../../commonComponents/Buttons/PurpleButton";
import PurpleOutlinedButton from "../../../../commonComponents/Buttons/PurpleOutlinedButton";

const LoginPageLayout = ({
  classes,
  loginData,
  handleChange,
  handleSubmit,
  errors,
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
            label="Email"
          />
        </Box>
        <Box className={classes.inputWrapper}>
          <FilledInput
            value={loginData.password}
            name="password"
            type="password"
            handleChange={handleChange}
            label="Password"
          />
        </Box>
        <Box className={classes.inputWrapper}>
          <PurpleButton type="submit" buttonTitle="LOG IN" />
        </Box>
        {errors && <div>{errors}</div>}
      </form>
      <Box className={classes.signInWrapper}>
        <Typography className={classes.text} variant="body2">
          Don't have an account?
        </Typography>
        <Box className={classes.inputWrapper}>
          <Link to={ROUTES.SING_UP_PAGE}>
            <PurpleOutlinedButton buttonTitle="SING UP" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

LoginPageLayout.propTypes = {};

export default withStyles(styles)(LoginPageLayout);
