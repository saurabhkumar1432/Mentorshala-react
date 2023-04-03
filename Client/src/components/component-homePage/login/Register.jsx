import React, { useState, useEffect } from "react";
// import Loader from "../../Loader";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, register } from "../../../actions/userAction";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import "./register.css";
import "./register1.scss";
import logInimg from "../../../images/22866003-removebg-preview.png";
// import axios from "axios";

// import {History} from 'react-router-dom';
const Register = (props) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  //   const [loginEmail, setLoginEmail] = useState("");
  //   const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    from: "",
    country: "",
    college: "",
    specialization: "",
    experience: "",
    linkedin: "",
    description: "",
    role: "",
  });

  const {
    firstname,
    lastname,
    email,
    password,
    from,
    country,
    college,
    specialization,
    experience,
    linkedin,
    description,
    role,
  } = user;

  // const [banner, setBanner] = useState();
  // const [bannerPreview, setBannerPreview] = useState("/Profile.png");

  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  //   const loginSubmit = (e) => {
  //     e.preventDefault();
  //     dispatch(login(loginEmail, loginPassword));
  //   };

  const navigate = useNavigate();

  const registerSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("emailData",email);
// console.log(avatar);
    const myForm = new FormData();
    myForm.set("firstname", firstname);
    myForm.set("lastname", lastname);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("from", from);
    myForm.set("country", country);
    myForm.set("college", college);
    myForm.set("specialization", specialization);
    myForm.set("experience", experience);
    myForm.set("linkedin", linkedin);
    myForm.set("description", description);
    myForm.set("avatar", avatar);
    // myForm.set("banner", banner);
    myForm.set("role", role);
    dispatch(register(myForm));
    navigate("/login");
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } 
    // else if (e.target.name === "banner") {
    //   const reader = new FileReader();

    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setBannerPreview(reader.result);
    //       setBanner(reader.result);
    //     }
    //   };
    //   reader.readAsDataURL(e.target.files[0]);
    // }
     else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (error) {
      // return alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated && flag) {
      navigate("/account");
      setFlag(false);
    }

    // return () => {}
  }, [dispatch, alert, error, isAuthenticated, navigate]);

  
  
  

  return (
    // <div className="ps2">
    //   <h2 className="ps1">Registration Form</h2>
    //   <div className="RegistrationContainer">
    //     <div className="image1_container">
    //       <img src={logInimg} />
    //     </div>
    //     <div id="registerFormDiv">
    //       <div className="formContainer-div">
    //         <form
    //           className="register-form"
    //           encType="multipart/form-data"
    //           onSubmit={registerSubmit}
    //           method="POST"
    //           action="/register1"
    //         >
    //         <div className="form-data1">
    //         <div className="form-data">
    //           <label htmlFor="firstname" className="customField">
    //             First Name
    //           </label>
    //           <input
    //             value={firstname}
    //             onChange={registerDataChange}
    //             name="firstname"
    //             id="firstname"
    //             placeholder="First Name"
    //             type="text"
    //             required
    //           />
    //           </div>
    //           <div className="form-data">
    //           <label htmlFor="lastname" className="customField">
    //             Last Name
    //           </label>
    //           <input
    //             value={lastname}
    //             onChange={registerDataChange}
    //             name="lastname"
    //             id="lastname"
    //             placeholder="Last Name"
    //             type="text"
    //             required
    //           />
    //           </div>
    //           <div className="form-data">
    //           <label htmlFor="email" className="customField">
    //             Email
    //           </label>
    //           <input
    //             value={email}
    //             onChange={registerDataChange}
    //             type="email"
    //             placeholder="Email"
    //             id="email"
    //             name="email"
    //             required
    //           />
    //           </div>
    //           <div className="form-data">
    //           <label htmlFor="password" className="customField">
    //             Password
    //           </label>
    //           <input
    //             value={password}
    //             onChange={registerDataChange}
    //             name="password"
    //             id="password"
    //             type="password"
    //             placeholder="Password"
    //           />
    //           </div>
    //           <div className="form-data">
    //           <label htmlFor="role" className="customField">
    //             Role
    //           </label>
    //           <select name="role" id="role" value={role} onChange={registerDataChange}>
    //             <option value="mentor">Mentor</option>
    //             <option value="mentee">Mentee</option>
    //           </select>
    //           </div>
    //           <div className="form-data">
    //           <label htmlFor="from" className="customField">
    //             From :
    //           </label>
    //           <input
    //             value={from}
    //             onChange={registerDataChange}
    //             name="from"
    //             id="from"
    //             placeholder="From"
    //           />
    //           </div>
    //           <div className="form-data">
    //           <label htmlFor="country" className="customField">
    //             Country
    //           </label>
    //           <input
    //             value={country}
    //             onChange={registerDataChange}
    //             name="country"
    //             id="country"
    //             placeholder="country"
    //             required
    //           />
    //           </div>
    //           <div className="form-data">
    //           <label htmlFor="college" className="customField">
    //             College
    //           </label>
    //           <input
    //             value={college}
    //             onChange={registerDataChange}
    //             name="college"
    //             id="college"
    //             placeholder="college"
    //           />
    //           </div>
    //           <div className="form-data">
    //           <label htmlFor="specialization" className="customField">
    //             Specialization
    //           </label>
    //           <input
    //             value={specialization}
    //             onChange={registerDataChange}
    //             name="specialization"
    //             id="specialization"
    //             placeholder="Specialization"
    //             required
    //           />
    //           </div>
    //           <div className="form-data">
    //           <label htmlFor="experience" className="customField">
    //             Experience
    //           </label>
    //           <input
    //             value={experience}
    //             onChange={registerDataChange}
    //             name="experience"
    //             id="experience"
    //             placeholder="Experience"
    //           />
    //           </div>
    //           <div className="form-data">
    //           <label htmlFor="linkedin" className="customField">
    //             Linked In Url
    //           </label>
    //           <input
    //             value={linkedin}
    //             onChange={registerDataChange}
    //             name="linkedin"
    //             id="linkedin"
    //             placeholder="LinkedIn Url"
    //           />
    //           </div>
    //           {/* <input type='file' accept="image/jpeg" onchange="uploadImage()"/> */}
    //           <div className="form-data">
    //           <label htmlFor="description" className="customField">
    //             Description
    //           </label>
    //           <input
    //             value={description}
    //             onChange={registerDataChange}
    //             name="description"
    //             id="description"
    //             placeholder="Describe Yourself"
    //           />
    //           </div>
    //           <div className="form-data">
    //           <label htmlFor="image" className="customField">
    //             Choose Profile pic
    //           </label>

    //           <img src={avatarPreview} alt="Avatar Preview" />
    //           <input
    //             type="file"
    //             //   placeholder="Choose Profile"
    //             name="avatar"
    //             accept="image/*"
    //             onChange={registerDataChange}
    //             required
    //           />
    //           </div>
    //           {/* <label htmlFor="image" className="customField">
    //             Choose Banner pic
    //           </label>

    //           <img src={bannerPreview} alt="Banner Preview" />
    //           <input
    //             type="file"
    //             //   placeholder="Choose Profile"
    //             name="banner"
    //             accept="image/*"
    //             onChange={registerDataChange}
    //           /> */}
    //           {/* <label htmlFor="password">password</label>
    //             <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /> */}
    //           {/* <div className="box"> */}
    //           </div>
    //           <button type="submit" className="submit" value="Register">
    //             Register
    //           </button>
    //           {/* </div> */}
    //         </form>
    //       </div>
    //     </div>

    //     {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
    //   </div>
    // </div>
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Registration Form</span>
        {/* <span className="title">Register</span> */}
        <form
              className="register-form"
              encType="multipart/form-data"
              onSubmit={registerSubmit}
              method="POST"
              action="/register1"
            >
        {/* <form onSubmit={handleSubmit}> */}

          {/* <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button disabled={loading}>Sign up</button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>} */}
          <div className="form-data">
              <label htmlFor="firstname" className="customField">
                First Name
              </label>
              <input
                value={firstname}
                onChange={registerDataChange}
                name="firstname"
                id="firstname"
                placeholder="First Name"
                type="text"
                required
              />
              </div>
              <div className="form-data">
              <label htmlFor="lastname" className="customField">
                Last Name
              </label>
              <input
                value={lastname}
                onChange={registerDataChange}
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                type="text"
                required
              />
              </div>
              <div className="form-data">
              <label htmlFor="email" className="customField">
                Email
              </label>
              <input
                value={email}
                onChange={registerDataChange}
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                required
              />
              </div>
              <div className="form-data">
              <label htmlFor="password" className="customField">
                Password
              </label>
              <input
                value={password}
                onChange={registerDataChange}
                name="password"
                id="password"
                type="password"
                placeholder="Password"
              />
              </div>
              <div className="form-data">
              <label htmlFor="role" className="customField">
                Role
              </label>
              <select name="role" id="role" value={role} onChange={registerDataChange}>
                <option value="mentor">Mentor</option>
                <option value="mentee">Mentee</option>
              </select>
              </div>
              <div className="form-data">
              <label htmlFor="from" className="customField">
                From :
              </label>
              <input
                value={from}
                onChange={registerDataChange}
                name="from"
                id="from"
                placeholder="From"
              />
              </div>
              <div className="form-data">
              <label htmlFor="country" className="customField">
                Country
              </label>
              <input
                value={country}
                onChange={registerDataChange}
                name="country"
                id="country"
                placeholder="country"
                required
              />
              </div>
              <div className="form-data">
              <label htmlFor="college" className="customField">
                College
              </label>
              <input
                value={college}
                onChange={registerDataChange}
                name="college"
                id="college"
                placeholder="college"
              />
              </div>
              <div className="form-data">
              <label htmlFor="specialization" className="customField">
                Specialization
              </label>
              <input
                value={specialization}
                onChange={registerDataChange}
                name="specialization"
                id="specialization"
                placeholder="Specialization"
                required
              />
              </div>
              <div className="form-data">
              <label htmlFor="experience" className="customField">
                Experience
              </label>
              <input
                value={experience}
                onChange={registerDataChange}
                name="experience"
                id="experience"
                placeholder="Experience"
              />
              </div>
              <div className="form-data">
              <label htmlFor="linkedin" className="customField">
                Linked In Url
              </label>
              <input
                value={linkedin}
                onChange={registerDataChange}
                name="linkedin"
                id="linkedin"
                placeholder="LinkedIn Url"
              />
              </div>
              {/* <input type='file' accept="image/jpeg" onchange="uploadImage()"/> */}
              <div className="form-data">
              <label htmlFor="description" className="customField">
                Description
              </label>
              <input
                value={description}
                onChange={registerDataChange}
                name="description"
                id="description"
                placeholder="Describe Yourself"
              />
              </div>
              <div className="form-data">
              <label htmlFor="image" className="customField">
                Choose Profile pic
              </label>

              <img src={avatarPreview} alt="Avatar Preview" />
              <input
                type="file"
                //   placeholder="Choose Profile"
                name="avatar"
                accept="image/*"
                onChange={registerDataChange}
                required
              />
              </div>
              {/* <label htmlFor="image" className="customField">
                Choose Banner pic
              </label>

              <img src={bannerPreview} alt="Banner Preview" />
              <input
                type="file"
                //   placeholder="Choose Profile"
                name="banner"
                accept="image/*"
                onChange={registerDataChange}
              /> */}
              {/* <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /> */}
              {/* <div className="box"> */}
              
              <button type="submit" className="submit" value="Register">
                Register
              </button>
              {/* </div> */}

        {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
        </form>
        {/* <p>
          You do have an account? <Link to="/register">Login</Link>
        </p> */}
      </div>
    </div>
  );
};
export default Register;
