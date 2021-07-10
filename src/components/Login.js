import React from "react";
import { Button } from "@material-ui/core";
import db, { auth, provider } from "../firebase";
import { useStateValue } from "../utils/StateProvider";
import { actionTypes } from "../utils/reducer";

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
          src="https://images-ext-1.discordapp.net/external/wqAiakysToBEmJKhljDIPURyhdUHx9wOMrifAgmVgiU/https/cdni.iconscout.com/illustration/premium/thumb/financial-and-budget-planning-on-the-web-using-statistics-3105375-2600055.png"
          alt=""
        />
      </div>
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
          <i class="fab fa-google"></i> <span> Log In with Google</span>
        </Button>
      </div>
    </div>
  );
};

export default Login;
