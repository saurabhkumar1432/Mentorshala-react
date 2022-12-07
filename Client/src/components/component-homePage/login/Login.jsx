import React from "react";
import { useState, useCallback, useEffect } from "react";
import "./login.css";
import Wave from "../../../images/wave.png";
import Bg from "../../../images/bg.svg";
import Avatar from "../../../images/avatar.svg";
import logInimg from "../../../images/22866003-removebg-preview.png";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [found, setFound] = useState(false);
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
          <form method="GET" action="/main">
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
                  value={email}
                  className="input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)
                  }
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
                  className="input"
                  id="exampleInputPassword1"
                  placeholder="Password"
                 required></input>
              </div>
            </div>
            <a href='#'>Forgot Password</a>
            <button
              type="submit"
              className="btn1 btn-primary loginBTN"
              // onSubmit={handleChange}
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