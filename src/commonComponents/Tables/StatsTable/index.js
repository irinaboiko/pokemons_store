import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  withStyles,
} from "@material-ui/core";

import Icons from "../../Cards/ProductDetailsCard/config/icons";

import styles from "./styles";

const StatsTable = ({
  classes,
  tableTitle,
  characteristics,
  rowTitle,
  rowInfo,
}) => {
  return (
    <Box className={classes.tableWrapper}>
      <Typography variant="h5" className={classes.tableCapture}>
        {tableTitle}
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {characteristics?.map((characteristic) => {
              return (
                <TableRow key={characteristic[rowTitle]}>
                  <TableCell>
                    <img
                      className={classes.stateIcon}
                      src={Icons[characteristic.title]}
                      alt="stat icon"
                    />
                  </TableCell>
                  <TableCell>{characteristic[rowInfo]}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

StatsTable.propTypes = {
  tableTitle: PropTypes.string.isRequired,
  characteristics: PropTypes.array,
  rowTitle: PropTypes.string,
  rowInfo: PropTypes.string,
};

export default React.memo(withStyles(styles)(StatsTable));
