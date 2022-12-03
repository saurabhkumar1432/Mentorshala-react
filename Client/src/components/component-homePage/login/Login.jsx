import React from 'react'
import { useState, useCallback, useEffect } from 'react';
import './login.css'
// import loginImg from '../../assets/logo.svg'
import logInimg from '../../../images/22866003-removebg-preview.png'
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [found, setFound] = useState(false);
    const handleChange = useCallback(async () => {
        try {
            const response = await fetch('https://react-http-1-2a5c9-default-rtdb.firebaseio.com/movies.json');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json();
            const loadedMovies = [];
            console.log(data);
            data.array.forEach(element => {
                if (element.email === email) {
                    setFound(true);
                }
            });
            console.log(found)
            if(found===false){
                alert('Register Yourself');
            }
        }
        catch(error){
            console.log(error.message);
        }
    },[])
    useEffect(() => {

        handleChange();
      }, [handleChange]);
    return (
        <div className="auth-form-container">
            <div id='formContainer'>
                <div className='formContainer-div'><h2>Login</h2></div>
                <div className='formContainer-div'>
                    <form method='GET' action='/main'>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address: </label>
                            <input type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}></input>
                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password: </label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                        </div>
                        <button type="submit" className="btn btn-primary loginBTN" onSubmit={handleChange}>Log In</button>
                    </form>
                </div>
            </div>
            <div>
                <img src={logInimg} alt="image"></img>
            </div>
        </div>
    )
}
export default Login