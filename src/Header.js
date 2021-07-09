import React from "react";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div>
      <Avatar src={user.photoURL ? user.photoURL : ""} />
      <h4>{user.displayName}</h4>
    </div>
  );
}

export default Header;
