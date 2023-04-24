import React from "react";
import { useState, useCallback, useEffect } from "react";
import "./login.css";
import Wave from "../../../images/wave.png";
import Bg from "../../../images/bg.svg";
import Avatar from "../../../images/avatar.svg";
import logInimg from "../../../images/22866003-removebg-preview.png";
import { useNavigate } from "react-router-dom";
// import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../../actions/userAction";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {auth,firestore} from '../../../firebase';
import firebase from 'firebase/compat/app';
import { signInWithEmailAndPassword } from "firebase/auth"; 
const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
}

const Login = (props) => {
  // const [email, setEmail] = useState("");
  // const [found, setFound] = useState(false);

  const dispatch = useDispatch();

  // const alert = useAlert();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [err, setErr] = useState(false);
  const [user] = useAuthState(auth);
  const loginSubmit = async (e) => {
    e.preventDefault();
    // dispatch(login(loginEmail, loginPassword));
    navigate("/main");
    // localStorage.setItem()
    localStorage.setItem("emailData",loginEmail);
    console.log(loginEmail,loginPassword);
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      navigate("/main")
    } catch (err) {
      console.log("this is the error: " + err);
      setErr(true);
    }
  };  

  const navigate = useNavigate();

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (error) {
      // return alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated && flag) {
      navigate("/main");
      setFlag(false);
    }
  }, [dispatch, alert, error, isAuthenticated, navigate]);

  // const handleChange = useCallback(async () => {
  //   try {
  //     const response = await fetch(
  //       "https://react-http-1-2a5c9-default-rtdb.firebaseio.com/movies.json"
  //     );
  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }
  //     const data = await response.json();
  //     const loadedMovies = [];
  //     console.log(data);
  //     data.array.forEach((element) => {
  //       if (element.email === email) {
  //         setFound(true);
  //       }
  //     });
  //     console.log(found);
  //     if (found === false) {
  //       alert("Register Yourself");
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }, []);
  // useEffect(() => {
  //   handleChange();
  // }, [handleChange]);
  return (
    <div className="auth-form-container">
      {/* <img class="wave" src={Wave} alt="wave"/> */}
      <div className="formContainer1">
        <div className="img1">
          <img src={Bg} alt="bg" />
        </div>
        <div className="login-content">
          <form onSubmit={loginSubmit}>
            <img src={Avatar} alt="avatar" class='avkgp' />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                {/* <label for="exampleInputEmail1">Email address </label> */}
                {/* <h5>Email Address</h5> */}
                <input
                  type="email"
                  value={loginEmail}
                  className="input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(e) => setLoginEmail(e.target.value)}
                  
                required></input>
              </div>
            </div>
            <div class="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                {/* <label for="exampleInputPassword1" className="input">Password </label> */}
                {/* <h5>Password</h5> */}
                <input
                  type="password"
                  value={loginPassword}
                  className="input"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e) => setLoginPassword(e.target.value)}
                 required></input>
              </div>
            </div>
            <a href="/password/forgot">Forget password?</a>
            <button
              type="submit"
              className="btn1 btn-primary loginBTN"
              // onSubmit={handleChange}
              value="Login"
            >
              Log In
            </button>
            <p>OR</p>
            <a href="/register" className="ps3" >Register  here</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;