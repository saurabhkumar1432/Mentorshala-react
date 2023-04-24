import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

import "./userSetting.css";
import CreateIcon from "@mui/icons-material/Create";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

function UserSetting(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //set the update name for the user
  const updateNameSubmit = async (event) => {
    // event.preventDefault();
    const userObj = {
      username: props.userDetail.username,
      firstName: firstName,
      lastName: lastName,
    };
    // console.log(props.userDetail.username);

    await axios
      .post("https://mentorshala-backend.onrender.com/api/v1/mentorshala/updateName", userObj)
      .catch((err) => {
        console.log("error");
      });
  };

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  //set the update email for the user
  const updateEmailSubmit = async (event) => {
    // event.preventDefault();
    const userObj = {
      username: props.userDetail.username,
      email: email,
      password: newPassword,
    };
    // console.log(props.userDetail.username);

    await axios
      .post("https://mentorshala-backend.onrender.com/api/v1/mentorshala/updateEmailPass", userObj)
      .catch((err) => {
        console.log("error");
      });
  };

  //city
  const [city, setCity] = useState("");
  //country
  const [country, setCountry] = useState("");

  //set the update city and country for the user
  const updateCityCountrySubmit = async (event) => {
    // event.preventDefault();

    const userObj = {
      username: props.userDetail.username,
      city: city,
      country: country,
    };
    // console.log(props.userDetail.username);

    await axios
      .post("https://mentorshala-backend.onrender.com/api/v1/mentorshala/updateCityCountry", userObj)
      .catch((err) => {
        console.log("error");
      });
  };

  //college
  const [college, setCollege] = useState("");
  //specialization
  const [specialization, setSpecialization] = useState("");

  //set the update college and specialization for the user
  const updateCollegeSpecializationSubmit = async (event) => {
    // event.preventDefault();

    const userObj = {
      username: props.userDetail.username,
      college: college,
      specialization: specialization,
    };
    // console.log(props.userDetail.username);

    await axios
      .post("https://mentorshala-backend.onrender.com/api/v1/mentorshala/updateCollegeSpecialization", userObj)
      .catch((err) => {
        console.log("error");
      });
  };
  

  const [newProfilePic, setNewProfilePic] = useState('');

  //set new profile pic
  const updateProfilePicSubmit = async (event) => {
    event.preventDefault();

    const userObj = {
      username: props.userDetail.username,
      profilePic: newProfilePic,
    };
    // console.log(props.userDetail.username);

    await axios
      .post("https://mentorshala-backend.onrender.com/api/v1/mentorshala/updateProfilePic", userObj)
      .catch((err) => {
        console.log("error");
      });
  };

  const [newBannerPic, setNewBannerPic] = useState('');

  //set new banner pic
  const updateBannerPicSubmit = async (event) => {
    event.preventDefault();

    const userObj = {
      username: props.userDetail.username,
      banner: newBannerPic,
    };
    // console.log(props.userDetail.username);

    await axios
      .post("https://mentorshala-backend.onrender.com/api/v1/mentorshala/updateBannerPic", userObj)
      .catch((err) => {
        console.log("error");
      });
  };
  

  // const handlePasswordChange = (event) => {
  //   setNewPassword(event.target.value);
  // };

  // const handleProfilePicChange = (event) => {
  //   setNewProfilePic(event.target.value);
  // };

  // const handleBannerPicChange = (event) => {
  //   setNewBannerPic(event.target.value);
  // };

  // const handlePasswordSubmit = (event) => {
  //   event.preventDefault();
  // };

  const logOut = () => {
    localStorage.clear();
  };
  // const handleProfilePicSubmit = (event) => {
  //   event.preventDefault();

  // };

  // const handleBannerSubmit = (event) => {
  //   event.preventDefault();

  // };

  //handle delete account function
  const deleteAccount = async (event) => {
    event.preventDefault();

    const userObj = {
      username: props.userDetail.username,
    };
    // console.log(props.userDetail.username);

    await axios
      .post("https://mentorshala-backend.onrender.com/api/v1/mentorshala/deleteUser", userObj)
      .catch((err) => {
        console.log(err);
      });

    localStorage.clear();
  };

  //mystyle
  const mystyle = {
    color: "white",
    backgroundColor: "#3457D5",
    padding: "10px",
    fontFamily: "Arial",
  };

  //useeffect
  useEffect(() => {
    const userObj = {
      username: props.userDetail.username,
    };
    // console.log(props.userDetail.username);

    axios
      .post("https://mentorshala-backend.onrender.com/api/v1/mentorshala/getUser", userObj)
      .then((res) => {
        // console.log(res.data);
        userObj(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.userDetail.username]);



  const userDetail = props.userDetail;

  return (
    <div className="settingContainer">
      <h4>Setting</h4>
      <div
        className="profileImageUpdate"
        style={{
          background: `url(${userDetail.banner})`,
          backgroundPosition: "center center",
        }}
      >
        <img src={userDetail.profilePic} alt="profilePic" />
        <label htmlFor="changeDP">
          <CreateIcon style={{ color: "white" }} />
          <input type="file" name="changeDP" id="changeDP" />
        </label>
      </div>
      <div className="bannerUpdate">
        <label htmlFor="changeBanner">
          <CameraAltIcon style={{ color: "white" }} />
          <input type="file" name="changeBanner" id="changeBanner" />
        </label>
      </div>
      <div className="user-info">
        <h4>
          {userDetail.firstName} {userDetail.lastName} {"("}
          {userDetail.role}
          {")"}
        </h4>
        <h6>
          {"("}
          {userDetail.username}
          {")"}
        </h6>
        <h6>
          {userDetail.from} {","} {userDetail.country}
        </h6>
        <h6>{userDetail.college}</h6>
        <h6>{userDetail.specialization}</h6>
      </div>
      {/* //update password */}
      <div className="formContainerSetting">
        <h6>Change Name:</h6>
        <form className="updatingForm" onSubmit={updateNameSubmit}>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Change First Name"
          />
          <button type="submit" value="Update">
            Save
          </button>
        </form>
        <br />
        <form className="updatingForm" onSubmit={updateNameSubmit}>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Change Last Name"
          />
          <button type="submit" value="Update">
            Save
          </button>
        </form>
      </div>
      <div className="formContainerSetting">
        <h6>Change Email/Password:</h6>
        <form className="updatingForm" onSubmit={updateEmailSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="New Email"
          />
          <button type="submit" value="Update">
            Save
          </button>
        </form>
        <br />
        <form className="updatingForm" onSubmit={updateEmailSubmit}>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
          />
          <button type="submit" value="Change">Save</button>
        </form>
      </div>
      <div className="formContainerSetting">
        <h6>Change Location:</h6>
        <form className="updatingForm" onSubmit={updateCityCountrySubmit}>
          <input
            type="text"
            onChange={(e)=>setCity(e.target.value)}
            placeholder="Change City"
          />
          <button type="submit">Save</button>
        </form>
        <br />
        <form className="updatingForm" onSubmit={updateCityCountrySubmit}>
          <input
            type="text"
            onChange={(e)=>setCountry(e.target.value)}
            placeholder="Change Country"
          />
          <button type="submit">Save</button>
        </form>
      </div>

      <div className="formContainerSetting">
        <h6>Change Work:</h6>
        <form className="updatingForm" onSubmit={updateCollegeSpecializationSubmit}>
          <input
            type="text"
            onChange={(e)=>setCollege(e.target.value)}
            placeholder="Change College Name"
          />
          <button type="submit">Save</button>
        </form>
        <br />
        <form className="updatingForm" onSubmit={updateCollegeSpecializationSubmit}>
          <input
            type="text"
            onChange={(e)=>setSpecialization(e.target.value)}
            placeholder="Change Specialization"
          />
          <button type="submit">Save</button>
        </form>
      </div>
      <br />
      {/* delete acccount */}
      <button onClick={deleteAccount} style={mystyle}>Delete Account</button>
      <a href="/"><button onClick={logOut} style={mystyle}>Log Out</button></a>
 
    </div>
  );
}

export default UserSetting;
