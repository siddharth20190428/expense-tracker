import React, { useEffect, useState } from "react";
import db from "./firebase";
import CustomizedTable from "./Table";

import { useStateValue } from "./StateProvider";

const Home = () => {
  const [{ user }, dispatch] = useStateValue();

  const [expenses, setExpenses] = useState([]);
  // let [total, setTotal] = useState(0);

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
        // setTotal(
        //   expenses.forEach((exp) => {
        //     total = total + exp.expense.amount;
        //   })
        // );
      });
  }, []);

  return (
    <>
      <CustomizedTable user={user} />
    </>
  );
};

export default Home;
