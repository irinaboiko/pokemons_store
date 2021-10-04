import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Box, Modal, Typography, withStyles } from "@material-ui/core";

import PurpleButton from "../../Buttons/PurpleButton";
import { ROUTES } from "../../../routes/routesNames";

import styles from "./styles";

const SignUpSuccessModal = ({ classes, open, onClose, successMessage }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box className={classes.modalBody}>
        <Typography variant="h6">{successMessage}</Typography>
        <Link to={ROUTES.LOG_IN_PAGE}>
          <PurpleButton buttonTitle="Log In" />
        </Link>
      </Box>
    </Modal>
  );
};

SignUpSuccessModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default React.memo(withStyles(styles)(SignUpSuccessModal));
