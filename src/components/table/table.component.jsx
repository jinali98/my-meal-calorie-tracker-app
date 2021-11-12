import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { CellWifiSharp } from "@material-ui/icons";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  root: {
    // width: "100%",
    maxHeight: 440,
    maxWidth: 700,
  },
});
const CustomTable = ({ rows, cells }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table stickyHeader aria-label="customized table">
        <TableHead>
          <TableRow>
            {cells?.map((cell) => (
              <StyledTableCell key={cell} align="center">
                {cell}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <StyledTableRow key={row.formatedLabel}>
              <StyledTableCell component="th" scope="row">
                {row.formatedLabel}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.formatedQuantity}
              </StyledTableCell>
              <StyledTableCell align="center">{row.unit}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
