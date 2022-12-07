import React, { useState } from "react";
import './register.css'
import logInimg from '../../../images/22866003-removebg-preview.png'
import axios from 'axios'
// import {History} from 'react-router-dom';
const Register = (props) => {
    // const history=useHistory();
    const [user,setUser]=useState({
        email:"",firstname:"",lastname:"",specialization:"",country:"",from:"",college:"",description:""
    });
    let name,value;
    const handleInput = (e) => {
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value})
    };
    const PostData=async(e)=>{
        console.log(" hello");
        console.log(user);
        e.preventDefault();
        const {email,firstname,lastname,specialization,country,from,college,description}=user;
        // console.log(email);
        const formData=new FormData()
        formData.append("Email",email)
        formData.append("FirstName",firstname)
        formData.append("LastName",lastname)
        formData.append("Country",country)
        formData.append("From",from)
        formData.append("College",college)
        formData.append("Description",description)
        const obj={
            "Email":email,
            "firstName":firstname,
            "lastName":lastname,
            "country":country,
            "from":from,
            "college":college,
            "description":description,
            "specialization":specialization
        }
        console.log(obj);
        await axios.post("http://localhost:5000/api/v1/mentorshala/createUser",obj).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
        
    };
    return (
        <div class='ps2'>
        <h2 className="ps1">Registration Form</h2>
        <div className="RegistrationContainer">
            <div className="image1_container">
                <img src={logInimg} />
            </div>
            <div id='registerFormDiv'>
                <div className='formContainer-div'>
                    <form className="register-form" method="GET" action="/main" onSubmit={PostData}>
                        <label htmlFor="firstname" className='customField'>First name</label>
                        <input value={user.firstname} onChange={handleInput} name="firstname" id="firstname" placeholder="first Name" type='text' required/>
                        <label htmlFor="lastname" className='customField'>Last name</label>
                        <input value={user.lastname} onChange={handleInput} name="lastname" id="lastname" placeholder="Last Name" required/>
                        <label htmlFor="email" className='customField'>Email</label>
                        <input value={user.email} onChange={handleInput} type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>
                        <label htmlFor="from" className='customField'>From :</label>
                        <input value={user.from} onChange={handleInput} name="from" id="from" placeholder="From" />
                        <label htmlFor="country" className='customField'>Country</label>
                        <input value={user.country} onChange={handleInput} name="country" id="country" placeholder="country" required />
                        <label htmlFor="college" className='customField'>College</label>
                        <input value={user.college} onChange={handleInput} name="college" id="college" placeholder="college" />
                        <label htmlFor="specialization" className='customField'>Specialization</label>
                        <input value={user.specialization} onChange={handleInput} name="specialization" id="specialization" placeholder="Specialization" required />
                        {/* <input type='file' accept="image/jpeg" onchange="uploadImage()"/> */}
                        <label htmlFor="description" className='customField'>Description</label>
                        <input value={user.description} onChange={handleInput} name="description" id="description" placeholder="Describe Yourself" />
                        {/* <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /> */}
                   {/* <div className="box"> */}
                        <button type='submit' className='submit'>Register</button>
                        {/* </div> */}
                    </form>
                </div>
            </div>

            {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
        </div>
        </div>
    )
}
export default Register;