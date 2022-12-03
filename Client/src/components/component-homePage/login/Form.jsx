import React,{useCallback} from 'react'
// import {Login} from "./Login"
import Register from "./Register"
import './login.css'
import { useState } from 'react'
import { useEffect } from 'react'
const Form = () => {
  // const [arr,setArr]=useState([]);
    // const [currentForm,setCurrentForm]=useState('login');
    // const toggleForm=(formname)=>{
    //     setCurrentForm(formname);
    // }
    // const fetchMoviesHandler = useCallback(async () => {
    //   try {
    //     const response = await fetch('https://react-http-1-17103-default-rtdb.firebaseio.com/registration.json');
    //     if (!response.ok) {
    //       throw new Error('Something went wrong!');
    //     }
    //     const data = await response.json();
    //     console.log(data);
    //   }
    //   catch (error) {
    //     console.log(error.message);
    //   }
    // },[])  
    // useEffect(() => {
    //   fetchMoviesHandler();
    // }, [fetchMoviesHandler]);  
    // async function addItems(items){
    //   const response=fetch("https://registration-c520f-default-rtdb.firebaseio.com/registration.json",{
    //     method:'POST',
    //     body:JSON.stringify(items),
    //     headers:{
    //       'Content-Type':'application/json'
    //     }
    //   })
    //   const data = await response.json();
    //   console.log(data);
    // }
  async function addItems(items){
    console.log(items);
  }
  return (
    <React.Fragment>
    <div className='form'>{
       <Register />
    }
    </div>
    </React.Fragment>
  )
}
export default Form;