import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";
import Login from "../LoginComponent/LoginComponent";
import Register from "../RegisterComponent/RegisterComponent";

interface Props {}

const Auth = (props: Props) => {
  const [isLoginScreen, setIsLoginScreen] = useState<boolean>(true);

  // const isLoggedIn = localStorage.getItem("loggedin");
  // const history = useHistory();

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     history.push("/");
  //   } else {
  //     return;
  //   }
  // }, [history, isLoggedIn]);

  useEffect(() => {
    setIsLoginScreen(true);
  }, []);
  return (
    <div className="page authWrapper">
      <div className="logo">Shelf.</div>
      <div className="authBox">
        <h3 className="title">Welcome to Shelf.</h3>
        {isLoginScreen ? <Login /> : <Register />}

        <NavLink to="/home" className="button">
          <button className="authButton">
            {isLoginScreen ? "login" : "register"}
          </button>
        </NavLink>
        <p
          className="authInfo"
          onClick={() => setIsLoginScreen(!isLoginScreen)}
        >
          {isLoginScreen
            ? "New here? Create an account"
            : "Already have an account? Go to login "}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
