import React, { useState, useEffect } from "react";
import "./App.css";
import db, { auth } from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button, Input, makeStyles, Modal } from "@material-ui/core";

import Header from "./Header";
import Login from "./Login";
import Home from "./Home";
import AddExpense from "./AddExpense";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <AddExpense />
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
