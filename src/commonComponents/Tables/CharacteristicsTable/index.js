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
import styles from "./styles";

const TableCharacteristics = ({
  classes,
  tableTitle,
  characteristics,
  rowTitle,
  rowInfo,
}) => {
  console.log(characteristics);
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
                  <TableCell>{characteristic[rowTitle]}</TableCell>
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

TableCharacteristics.propTypes = {
  tableTitle: PropTypes.string.isRequired,
  characteristics: PropTypes.array,
  rowTitle: PropTypes.string,
  rowInfo: PropTypes.string,
};

export default React.memo(withStyles(styles)(TableCharacteristics));
