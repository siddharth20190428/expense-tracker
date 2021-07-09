import React from "react";
import { Avatar, Button } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  const signOut = () => {
    dispatch({
      type: actionTypes.REMOVE_USER,
    });
  };

  return (
    <header>
      <h1 className="logo">Expense Tracker</h1>
      {user ? (
        <>
          <Avatar src={user.photoURL} />
          <Button onClick={signOut}>Sign Out</Button>
          <h4>{user.displayName}</h4>
        </>
      ) : (
        <div></div>
      )}
    </header>
  );
}

export default Header;
