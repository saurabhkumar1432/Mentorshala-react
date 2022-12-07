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
    // console.log(" hello");
    // const [email, setEmail] = useState('');
    // const [firstname, setFirstName] = useState('');
    // const [lastname, setLastName] = useState('');
    // const [specialization, setSpecialization] = useState('');
    // const [country, setCountry] = useState('');
    // const [from, setFrom] = useState('');
    // const [college, setCollege] = useState('');
    // const [description, setDescription] = useState('');
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
        // const res=await fetch('/createUser',{
        //     method:"POST",
        //     headers:{
        //         "content-Type":"application/json"
        //     },
        //     // body:json.stringify({
        //     //     email,firstname,lastname,specialization,country,from,college,description
        //     // })
        // });
        await axios.post("http://localhost:5000/api/v1/mentorshala/createUser",obj).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
        // const data=await res.json();
        // if(data.status===422||!data){
        //     window.alert('Invalid Registration');
        //     console.log('Invalid registration')
        // }else{
        //     window.alert(' Registration Success');
        //     console.log('Successful registration');
        //     // history.push('/login');
        // }
    };
    return (
        <div className="RegistrationContainer">
            <div className="image1_container">
                <img src={logInimg} />
            </div>
            <div id='registerFormDiv'>
                <div className='formContainer-div'><h2>Register</h2></div>
                <div className='formContainer-div'>
                    <form className="register-form">
                        <label htmlFor="firstname">First name</label>
                        <input value={user.firstname} onChange={handleInput} name="firstname" id="firstname" placeholder="first Name" type='text' required/>
                        <label htmlFor="lastname">Last name</label>
                        <input value={user.lastname} onChange={handleInput} name="lastname" id="lastname" placeholder="Last Name" required/>
                        <label htmlFor="email">email</label>
                        <input value={user.email} onChange={handleInput} type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>
                        <label htmlFor="from">From :</label>
                        <input value={user.from} onChange={handleInput} name="from" id="from" placeholder="From" />
                        <label htmlFor="country">Country</label>
                        <input value={user.country} onChange={handleInput} name="country" id="country" placeholder="country" required />
                        <label htmlFor="college">College</label>
                        <input value={user.college} onChange={handleInput} name="college" id="college" placeholder="college" />
                        <label htmlFor="specialization">Specialization</label>
                        <input value={user.specialization} onChange={handleInput} name="specialization" id="specialization" placeholder="Specialization" required />
                        {/* <input type='file' accept="image/jpeg" onchange="uploadImage()"/> */}
                        <label htmlFor="description">Description</label>
                        <input value={user.description} onChange={handleInput} name="description" id="description" placeholder="Describe Yourself" />
                        {/* <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /> */}
                        <button type='submit'  onClick={PostData}>Register</button>
                    </form>
                </div>
            </div>

            {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
        </div>
    )
}
export default Register;