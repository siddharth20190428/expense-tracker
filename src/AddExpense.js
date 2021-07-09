import React, { useState } from "react";
import { Button, TextField, FormControl } from "@material-ui/core";
import db from "./firebase";

import { useStateValue } from "./StateProvider";

const AddExpense = () => {
  const [{ user }, dispatch] = useStateValue();

  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [amount, setAmount] = useState(0);

  const curr = new Date();
  const currDate = curr.toJSON().slice(0, 10);
  const currTime = curr.toTimeString().slice(0, 5);

  const onSubmit = (e) => {
    e.preventDefault();

    db.collection("expenses").add({
      timestamp: curr.toLocaleString(),
      user: user.uid,
      text,
      amount,
    });

    setText("");
    setDate("");
    setTime("");
    setAmount(0);
  };
  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <FormControl>
        <TextField
          id="outlined-basic"
          label="Expense"
          value={text}
          onChange={(e) => setText(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Amount"
          type="number"
          value
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue={currDate}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="time"
          label="Time"
          type="time"
          defaultValue={currTime}
          value={time}
          onChange={(e) => setTime(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <Button type="submit">Add transaction</Button>
      </FormControl>
    </form>
  );
};

export default AddExpense;
