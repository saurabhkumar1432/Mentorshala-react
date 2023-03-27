import React from "react";
import { useState, useCallback, useEffect } from "react";
import "./login.css";
import Wave from "../../../images/wave.png";
import Bg from "../../../images/bg.svg";
import Avatar from "../../../images/avatar.svg";
import logInimg from "../../../images/22866003-removebg-preview.png";
const AdminLogin = (props) => {
  return (
    <div className="auth-form-container">
      <div className="formContainer1">
        <div className="img1">
          <img src={Bg} alt="bg" />
        </div>
        <div className="login-content">
          <form method="GET" action="/admin">
            <img src={Avatar} alt="avatar" class='avkgp' />
            <h2 className="title">Admin Login Panel</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input
                  type="email"
                 
                  className="input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  
                required></input>
              </div>
            </div>
            <div class="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input
                  type="password"
                  className="input"
                  id="exampleInputPassword1"
                  placeholder="Password"
                 required></input>
              </div>
            </div>
         
            <button
              type="submit"
              className="btn1 btn-primary loginBTN"
            >
              Log In
            </button>
           
          </form>
        </div>
      </div>
    </div>
  );
};
export default AdminLogin;