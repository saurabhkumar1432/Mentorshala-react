import React from 'react'
import {Button,TextField} from '@material-ui/core';
import { multiStepContext } from './StepContext';
import { useContext } from 'react';
const SecondForm = () => {    
    const {setStep,userData,setUserData}=useContext(multiStepContext)
  return (
    <div className='registrationFormPage'>
        <div className='div-field'><TextField label='College' margin='normal' value={userData['college']} onChange={(e)=>setUserData({...userData,'college':e.target.value})} varient='outlined' color='secondary' className='formField'></TextField></div>

        <div className='div-field'><TextField label='Specialization' margin='normal' value={userData['specialization']} onChange={(e)=>setUserData({...userData,'specialization':e.target.value})} varient='outlined' color='secondary' className='formField'></TextField></div>

        <div className='div-field'><TextField label='Description' margin='normal' value={userData['description']} onChange={(e)=>setUserData({...userData,'description':e.target.value})} varient='outlined' color='secondary' className='formField'></TextField></div>
        
        <div className='div-field'>
            <select name="role" value={userData['role']} onChange={(e)=>setUserData({...userData,'role':e.target.value})}>
                <option value="Mentor">Mentor</option>
                <option value="Mentee">Mentee</option>
            </select>
        </div>

        <div className='div-field'><Button varient="contained" style={{background:"blue",color:" white"}} onClick={()=>setStep(1)}>Back</Button><Button varient="contained" style={{background:"blue",color:" white"}} onClick={()=>setStep(3)}>Next</Button></div>
    </div>
  )
}

export default SecondForm
