import React from "react";
import { useState, useCallback, useEffect } from "react";
import "./login.css";
import Wave from "../../../images/wave.png";
import Bg from "../../../images/bg.svg";
import Avatar from "../../../images/avatar.svg";
import logInimg from "../../../images/22866003-removebg-preview.png";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const AdminLogin = (props) => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const cred = { username, password };

      const response = await axios.post('https://mentorshala-backend.onrender.com/api/v1/mentorshala/adminAuth',cred).catch((err)=>{
        console.log("error");
})

      if (response.status === 200) {
        // Authentication successful, redirect to dashboard
        window.location.href = '/admin';
      } else {
        // Authentication failed, display error message
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-form-container">
      <div className="formContainer1">
        <div className="img1">
          <img src={Bg} alt="bg" />
        </div>
        <div className="login-content">
        <form onSubmit={handleLogin}>
            <img src={Avatar} alt="avatar" class='avkgp' />
            <h2 className="title">Admin Login Panel</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input
                  type="username"
                 
                  className="input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                required
                
                ></input>
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
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
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