import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import styles from "./styles";
import OutlinedInput from "../../../../commonComponents/Inputs/OutlinedInput";
import { ROUTES } from "../../../../routes/routesNames";

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
          <OutlinedInput
            value={loginData.email}
            name="email"
            type="email"
            handleChange={handleChange}
            label="Email"
          />
        </Box>
        <Box className={classes.inputWrapper}>
          <OutlinedInput
            value={loginData.password}
            name="password"
            type="password"
            handleChange={handleChange}
            label="Password"
          />
        </Box>
        <Box className={classes.inputWrapper}>
          <Button type="submit" variant="contained" color="primary">
            LOG IN
          </Button>
        </Box>
        {errors && <div>{errors}</div>}
      </form>
      <Box className={classes.signInWrapper}>
        <Typography className={classes.text} variant="body2">
          Don't have an account?
        </Typography>
        <Box className={classes.inputWrapper}>
          <Link to={ROUTES.SING_UP_PAGE}>
            <Button variant="outlined" color="primary">
              SIGN IN
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

LoginPageLayout.propTypes = {};

export default withStyles(styles)(LoginPageLayout);
