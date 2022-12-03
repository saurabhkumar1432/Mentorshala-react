import React, { useState } from "react";
import './register.css'
import logInimg from '../../../images/22866003-removebg-preview.png'
import { ToastContainer, toast } from 'react-toastify'
const Register = (props) => {
    const [email, setEmail] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [country, setCountry] = useState('');
    const [from, setFrom] = useState('');
    const [college, setCollege] = useState('');
    const [description, setDescription] = useState('');
    const notifyError = () => toast.error("Something went wrong");
    const notifySuccess = () => toast.success("Application sent!");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const items = {
                // email: email,
                // firstname: firstname,
                // lastname: lastname,
                // specialization: specialization,
                // description: description,
                // from: from,
                // college: college,
                // country: country
                email,firstname,lastname,specialization,description,from,college,country
            };
            const res = await fetch("https://registration-c520f-default-rtdb.firebaseio.com/registration.json", {
                method: "POST",
                header: { 'Content-Type': 'application/json' },
                // credentials: 'include',
                body: JSON.stringify(items)
            });
            const data = await res.json();
            console.log(email,firstname,lastname);
            console.log(data[0])
            console.log(data);
            if (data) {
                notifySuccess();
            }
        }
        catch (error) {
            notifyError();
        }
        // props.onAddItems(items);
        // clearState();
    };
    // const clearState=()=>{
    //     setFirstName('');
    //     setEmail('');setSpecialization('');setDescription('');setFrom('');setCollege('');setCountry('');
    // }
    return (
        <div className="RegistrationContainer">
            <div className="image1_container">
                <img src={logInimg} />
            </div>
            <div id='registerFormDiv'>
                <div className='formContainer-div'><h2>Register</h2></div>
                <div className='formContainer-div'>
                    <form className="register-form" method="GET" action="/main">
                        <label htmlFor="firstname">First name</label>
                        <input value={firstname} onChange={(e) => setFirstName(e.target.value)} name="firstname" id="firstname" placeholder="first Name" type='text' required/>
                        <label htmlFor="lastname">Last name</label>
                        <input value={lastname} onChange={(e) => setLastName(e.target.value)} name="lastname" id="lastname" placeholder="Last Name" required/>
                        <label htmlFor="email">email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>
                        <label htmlFor="from">From :</label>
                        <input value={from} onChange={(e) => setFrom(e.target.value)} name="from" id="from" placeholder="From" />
                        <label htmlFor="country">Country</label>
                        <input value={country} onChange={(e) => setCountry(e.target.value)} name="country" id="country" placeholder="country" required />
                        <label htmlFor="college">College</label>
                        <input value={from} onChange={(e) => setCollege(e.target.value)} name="college" id="college" placeholder="College" />
                        <label htmlFor="specialization">Specialization</label>
                        <input value={specialization} onChange={(e) => setSpecialization(e.target.value)} name="specialization" id="specialization" placeholder="Specialization" required />
                        {/* <input type='file' accept="image/jpeg" onchange="uploadImage()"/> */}
                        <label htmlFor="description">Description</label>
                        <input value={description} onChange={(e) => setDescription(e.target.value)} name="description" id="description" placeholder="Describe Yourself" />
                        {/* <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /> */}
                        <button type="submit" className="btn btn-primary loginBTN" onSubmit={handleSubmit}>Register</button>
                    </form>
                </div>
            </div>

            {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
        </div>
    )
}
export default Register;