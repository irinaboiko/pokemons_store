import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  withStyles,
} from "@material-ui/core";

import styles from "./styles";
import OutlinedInput from "../../../../commonComponents/Inputs/OutlinedInput";

const SingUpPageLayout = ({ classes, singUpSata, handleChange }) => {
  return (
    <Box className={classes.wrapper}>
      <form>
        <Box className={classes.inputWrapper}>
          <OutlinedInput
            value={singUpSata.email}
            name="email"
            type="email"
            label="Email"
            handleChange={handleChange}
          />
        </Box>
        <Box className={classes.inputWrapper}>
          <OutlinedInput
            value={singUpSata.firstName}
            name="firstName"
            type="text"
            label="First Name"
            handleChange={handleChange}
          />
        </Box>
        <Box className={classes.inputWrapper}>
          <OutlinedInput
            value={singUpSata.lastName}
            name="lastName"
            type="text"
            label="Last Name"
            handleChange={handleChange}
          />
        </Box>
        <Box>
          <FormControl className={classes.inputWrapper}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              label="Gender"
              name="gender"
              value={singUpSata.gender}
              handleChange={handleChange}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </form>
    </Box>
  );
};

SingUpPageLayout.propTypes = {};

export default withStyles(styles)(SingUpPageLayout);