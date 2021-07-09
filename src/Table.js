import React, { useEffect, useState } from "react";
import db from "./firebase";

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

const CustomizedTables = ({ user }) => {
  const classes = useStyles();

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    db.collection("expenses")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // every time a new post is added, this code fired
        setExpenses(
          snapshot.docs
            .filter((doc) => doc.data().user === user.uid)
            .map((doc) => ({ id: doc.id, expense: doc.data() }))
        );
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Expenses</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Timestamp</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(expenses)}
          {expenses.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.expense.text}
              </StyledTableCell>
              <StyledTableCell align="right">
                &#8377;&nbsp;{row.expense.amount}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.expense.timestamp}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTables;
