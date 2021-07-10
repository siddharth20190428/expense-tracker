import React, { useState } from "react";
import { Button, TextField, FormControl, Modal } from "@material-ui/core";
import db from "../firebase";

import { useStateValue } from "../utils/StateProvider";

const AddExpense = () => {
  const [{ user }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);

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
      date: currDate,
      time: currTime,
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
    <>
      <Button className="add-trans" onClick={() => setOpen(true)}>
        Add a Transaction
      </Button>
      <Modal className="mod" open={open} onClose={() => setOpen(false)}>
        <div className="trans">
          <form onSubmit={onSubmit} autoComplete="off">
            <FormControl>
              <TextField
                className="inputs"
                id="outlined-basic"
                label="Expense"
                value={text}
                onChange={(e) => setText(e.target.value)}
                variant="outlined"
              />
              <TextField
                className="inputs"
                id="outlined-basic"
                label="Amount"
                type="number"
                pattern="/^[0-9.]+$/"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                variant="outlined"
              />
              <TextField
                className="inputs"
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
                className="inputs"
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
              <Button
                className="add-trans"
                type="submit"
                onClose={() => setOpen(false)}
              >
                Add transaction
              </Button>
            </FormControl>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddExpense;
