import React, { useContext } from 'react'
import {Button,TextField} from '@material-ui/core';
import { multiStepContext } from './StepContext';
const FirstForm = () => {
    const {setStep,userData,setUserData}=useContext(multiStepContext)
  return (
    <div className='registrationFormPage'>
        <div className='div-field'><TextField label='First Name' margin='normal' value={userData['firstName']} onChange={(e)=>setUserData({...userData,'firstName':e.target.value})} varient='outlined' color='secondary' className='formField'></TextField></div>

        <div className='div-field'><TextField label='Last Name' margin='normal' value={userData['lastName']} onChange={(e)=>setUserData({...userData,'lastName':e.target.value})} varient='outlined' color='secondary' className='formField'></TextField></div>

        <div className='div-field'><TextField label='Email' margin='normal' value={userData['Email']} onChange={(e)=>setUserData({...userData,'Email':e.target.value})} varient='outlined' color='secondary' className='formField'></TextField></div>

        <div className='div-field'><TextField label='City/State' margin='normal' value={userData['from']} onChange={(e)=>setUserData({...userData,'from':e.target.value})} varient='outlined' color='secondary' className='formField'></TextField></div>

        <div className='div-field'><TextField label='Country' margin='normal' value={userData['country']} onChange={(e)=>setUserData({...userData,'country':e.target.value})} varient='outlined' color='secondary' className='formField'></TextField></div>

        <div className='div-field'><Button varient="contained" style={{background:"blue",color:" white"}} onClick={()=>setStep(2)}>Next</Button></div>
    </div>
  )
}

export default FirstForm
