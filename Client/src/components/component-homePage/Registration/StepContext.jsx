import React from 'react'
import { useState } from 'react'
import Register from './Register'
import { Navigate } from 'react-router-dom'
export const multiStepContext=React.createContext()
const StepContext = () => {
    const [currentStep,setStep]=useState(1)
    const [userData,setUserData]=useState([])
    const [finalData,setFinalData]=useState(null)

    function submitData(){
        setFinalData(userData)
        setUserData([])
    }
  return (
    <div>
        <multiStepContext.Provider value={{currentStep,setStep,userData,setUserData,finalData,setFinalData,submitData}}>
            <Register/>
        </multiStepContext.Provider>
    </div>
  )
}

export default StepContext
