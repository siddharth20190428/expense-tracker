import React, { useState } from "react";
import { Button, TextField, FormControl, Modal } from "@material-ui/core";
import db from "../firebase";

import { useStateValue } from "../utils/StateProvider";

const AddExpense = () => {
  const [{ user }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);

  const [text, setText] = useState("");
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
                required
              />
              <TextField
                className="inputs"
                id="outlined-basic"
                label="Amount"
                type="number"
                min="0"
                pattern="/^[0-9.]+$/"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                variant="outlined"
                required
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
