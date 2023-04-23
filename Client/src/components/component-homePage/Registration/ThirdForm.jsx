import React from 'react'
import {Button,TextField} from '@material-ui/core';
import { multiStepContext } from './StepContext';
import { useContext } from 'react';
const ThirdForm = () => {
    const {setStep,userData,setUserData}=useContext(multiStepContext)
  return (
    <div className='registrationFormPage'>
        <div className='div-field'><TextField label='Experience (Write in ` , ` )' margin='normal' value={userData['experience']} onChange={(e)=>setUserData({...userData,'experience':e.target.value})} varient='outlined' color='secondary' className='formField'></TextField></div>

        <div className='div-field'><TextField label='Linkdin' margin='normal' value={userData['Linkedin']} onChange={(e)=>setUserData({...userData,'Linkedin':e.target.value})} varient='outlined' color='secondary' className='formField'></TextField></div>

        <div className='div-field'><Button varient="contained" style={{background:"blue",color:" white"}} onClick={()=>setStep(2)}>Back</Button><Button varient="contained" style={{background:"blue",color:" white"}} onClick={()=>setStep(4)}>Next</Button></div>
    </div>
  )
}

export default ThirdForm
