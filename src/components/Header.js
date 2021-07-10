import React from "react";
import { Avatar, Button } from "@material-ui/core";
import { useStateValue } from "../utils/StateProvider";
import { actionTypes } from "../utils/reducer";

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
      <div className="info">
        {user ? (
          <>
            <Avatar className="avatar" src={user.photoURL} />
            <h4 className="username">{user.displayName}</h4>
            <Button className="logout-btn" onClick={signOut}>
              Sign Out
            </Button>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </header>
  );
}

export default Header;
