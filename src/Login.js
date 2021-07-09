import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import db, { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="container">
      <div className="illustration">
        <img
          src="https://image.freepik.com/free-vector/finance-department-employees-are-calculating-expenses-company-s-business_1150-41782.jpg"
          alt=""
        />
        <div className="login">
          <h1>Track your expenses like never before</h1>
          <p className="hero-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            assumenda excepturi officiis consectetur suscipit, ullam ipsum
            laborum. Repudiandae animi quibusdam voluptatem nam quod est commodi
            quam! Illo tempore minus culpa ipsum neque ducimus assumenda,
            aspernatur doloremque tempora ad, earum cum quae eligendi ipsam
            debitis, optio officiis deleniti odio. Corrupti, animi.
          </p>
          <Button className="login-btn" type="submit" onClick={signIn}>
            Log In with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
