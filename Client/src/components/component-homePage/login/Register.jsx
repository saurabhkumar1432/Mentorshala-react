import React, { useState, useEffect } from "react";
// import Loader from "../../Loader";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, register } from "../../../actions/userAction";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import "./register.css";
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

  // const history=useHistory();
  //   const [user, setUser] = useState({
  //     email: "",
  //     firstname: "",
  //     lastname: "",
  //     specialization: "",
  //     country: "",
  //     from: "",
  //     college: "",
  //     description: "",
  //   });
  //   let name, value;
  //   const handleInput = (e) => {
  //     console.log(e);
  //     name = e.target.name;
  //     value = e.target.value;
  //     setUser({ ...user, [name]: value });
  //   };
  //   const PostData = async (e) => {
  //     console.log(" hello");
  //     console.log(user);
  //     e.preventDefault();
  //     const {
  //       name,
  //       email,
  //       password,
  //       from,
  //       country,
  //       college,
  //       specialization,
  //       experience,
  //       linkedin,
  //       description,
  //     } = user;
  // console.log(email);
  // const formData = new FormData();
  // formData.append("Email", email);
  // formData.append("Name", name);
  // formData.append("Country", country);
  // formData.append("From", from);
  // formData.append("College", college);
  // formData.append("Description", description);
  // const user = {
  //   Name: name,
  //   Email: email,
  //   Password: password,
  //   from: from,
  //   country: country,
  //   college: college,
  //   specialization: specialization,
  //   experience: experience,
  //   Linkedin: linkedin,
  //   description: description,
  // };
  // console.log(user);
  // await axios
  //   .post("http://localhost:5000/api/v1/mentorshala/createUser", user)
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  return (
    <div class="ps2">
      <h2 className="ps1">Registration Form</h2>
      <div className="RegistrationContainer">
        <div className="image1_container">
          <img src={logInimg} />
        </div>
        <div id="registerFormDiv">
          <div className="formContainer-div">
            <form
              className="register-form"
              encType="multipart/form-data"
              onSubmit={registerSubmit}
              method="POST"
              action="/register1"
            >
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

              <label htmlFor="role" className="customField">
                Role
              </label>
              <select name="role" id="role" value={role} onChange={registerDataChange}>
                <option value="mentor">Mentor</option>
                <option value="mentee">Mentee</option>
              </select>

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
              {/* <input type='file' accept="image/jpeg" onchange="uploadImage()"/> */}
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
            </form>
          </div>
        </div>

        {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
      </div>
    </div>
  );
};
export default Register;
