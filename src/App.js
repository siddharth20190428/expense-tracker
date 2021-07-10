import React from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import { useStateValue } from "./utils/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <>
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
