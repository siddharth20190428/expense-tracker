import React, { useEffect, useState } from "react";
import { Button, TextField, FormControl } from "@material-ui/core";
import db from "./firebase";

import { useStateValue } from "./StateProvider";

const Home = () => {
  const [{ user }, dispatch] = useStateValue();

  const [expenses, setExpenses] = useState([]);
  let [total, setTotal] = useState(0);

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
        setTotal(
          expenses.forEach((exp) => {
            total = total + exp.expense.amount;
          })
        );
      });
  }, []);

  return (
    <>
      {total}
      {expenses.map((data) => (
        <div>
          {data.id} {data.expense.text} {data.expense.amount}
        </div>
      ))}
      {/* <p>{expenses[0].expense.text}</p>
      {expenses.map((expense) => (
        <h2>{expense.expense.text}</h2>
      ))} */}
    </>
  );
};

export default Home;
