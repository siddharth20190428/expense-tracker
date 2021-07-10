import React from "react";

import {
  withStyles,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

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
  table: {
    minWidth: 700,
  },
});

const CustomizedTables = ({ expenses }) => {
  const classes = useStyles();

  return (
    <TableContainer className="table-container" component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Expenses</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.length === 0 ? (
            <>
              <StyledTableRow key={0}>No expenses till now</StyledTableRow>
            </>
          ) : (
            expenses.map((row) => {
              return (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.expense.text}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    &#8377;&nbsp;{row.expense.amount}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.expense.date}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.expense.time}
                  </StyledTableCell>
                </StyledTableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTables;
