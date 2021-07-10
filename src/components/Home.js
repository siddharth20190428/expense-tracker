import React, { useEffect, useState } from "react";
import db from "../firebase";
import CustomizedTable from "./Table";
import AddExpense from "./AddExpense";

import { useStateValue } from "../utils/StateProvider";

const Home = () => {
  const [{ user }, dispatch] = useStateValue();

  const [expenses, setExpenses] = useState([]);
  // let [total, setTotal] = useState(0);

  useEffect(() => {
    db.collection("expenses")
      .orderBy("date", "desc")
      .onSnapshot((snapshot) => {
        // every time a new post is added, this code fired
        setExpenses(
          snapshot.docs
            .filter((doc) => doc.data().user === user.uid)
            .map((doc) => ({ id: doc.id, expense: doc.data() }))
        );
        // setTotal(expenses.reduce((acc, curr) => acc + +curr.expense.amount, 0));
      });
  }, []);

  return (
    <div className="main">
      <AddExpense />
      <CustomizedTable expenses={expenses} />
    </div>
  );
};

export default Home;
