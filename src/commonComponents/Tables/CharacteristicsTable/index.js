import React from "react";
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

export default React.memo(withStyles(styles)(TableCharacteristics));
