import React from 'react'
import HorizontalLinearStepper from './HorizontalLinearStepper'
import './register.css'
import regisImage from '../../../images/social-media-users.svg'
import FirstForm from './FirstForm'
import SecondForm from './SecondForm'
import ThirdForm from './ThirdForm'
import FourthForm from './FourthForm'
import {Stepper,StepLabel,Step} from '@material-ui/core'
import { multiStepContext } from './StepContext'
import { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { register } from '../../../actions/userAction'
const Register = () => {
  const [registerd,setRegisterd]=useState(false)
  const navigate=useNavigate()
  const {currentStep,finalData}=useContext(multiStepContext)
  const showStep=(step)=>{
    switch(step){
      case 1:
        return <FirstForm/>
      case 2:
        return <SecondForm/>
      case 3:
        return <ThirdForm/>
      case 4:
        return <FourthForm></FourthForm>
    }
  }
  if(!finalData){
      return (
        <div id='register-Container'>
          <div className="mainContainer container">
            <div class="row">
              <div class="col-4">
                <img src={regisImage}></img>
              </div>
              <div class="col-8" style={{padding:"1%"}}>
                <h4>Registration Form</h4>
                <Stepper style={{width:"100%"}} activeStep={currentStep-1} orientation='horizontal'>
                  <Step>
                    <StepLabel></StepLabel>
                  </Step>
                  <Step>
                    <StepLabel></StepLabel>
                  </Step>
                  <Step>
                    <StepLabel></StepLabel>
                  </Step>
                  <Step>
                    <StepLabel></StepLabel>
                  </Step>
                </Stepper>
                {showStep(currentStep)}
                
              </div>
            </div>
          </div>
        </div>
      )
  }
  else{
    finalData.experience=finalData.experience.split(',')
    // finalData={...finalData,'profilePic':'https://i.pinimg.com/originals/36/fa/7b/36fa7b46c58c94ab0e5251ccd768d669.jpg'}
    // finalData={...finalData,'banner':'https://images.unsplash.com/photo-1581882897974-fca44f329313?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'}
    console.log(finalData);
    const postUserData=async()=>{
      await axios({
        method: 'post',
        url: 'https://mentorshala-backend.onrender.com/api/v1/mentorshala/register',
        data: finalData
      })
      .then((res)=>{
        setRegisterd(true)
      })
      .catch((err)=>{
          console.log("error");
      })
    }
    postUserData()
      navigate('/login')
  }
}

export default Register
