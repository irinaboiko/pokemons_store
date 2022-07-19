import React from "react";
import PropTypes from "prop-types";
import { Modal, Typography, withStyles } from "@material-ui/core";

import styles from "./styles";

const OrderSuccessModal = ({ classes, open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Typography variant="h6" className={classes.modalBody}>
        Pokemons are in pokeballs! Thanks for choosing us!
      </Typography>
    </Modal>
  );
};

OrderSuccessModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default React.memo(withStyles(styles)(OrderSuccessModal));
