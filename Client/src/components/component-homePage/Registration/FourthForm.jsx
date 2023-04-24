import React from 'react'
import {Button,TextField} from '@material-ui/core';
import { multiStepContext } from './StepContext';
import { useContext } from 'react';
const FourthForm = () => {
    const {setStep,userData,setUserData,submitData}=useContext(multiStepContext)
  return (
      <div className='registrationFormPage'>
        <div className='div-field'><TextField label='Username' margin='normal' value={userData['username']} onChange={(e)=>setUserData({...userData,'username':e.target.value})} varient='outlined' color='secondary' className='formField'></TextField></div>

        {/* <div className='div-field'>Profile Picture: <input type="file" name="profilePic" onChange={(e)=>setUserData({...userData,'profilePic':e.target.files[0]})}/></div>
        
        <div className='div-field'>Banner: <input type="file" name="Banner" onChange={(e)=>setUserData({...userData,'banner':e.target.files[0]})}/></div> */}

        <div className='div-field'>Password: <input type="password" name="password" value={userData['Password']} onChange={(e)=>setUserData({...userData,'Password':e.target.value})}/></div>


        <div className='div-field'><Button varient="contained" style={{background:"blue",color:" white"}} onClick={()=>setStep(3)}>Back</Button><Button varient="contained" style={{background:"blue",color:" white"}} onClick={submitData}>Submit</Button></div>
    </div>
  )
}

export default FourthForm
