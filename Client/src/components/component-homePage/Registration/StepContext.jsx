import React from 'react'
import { useState } from 'react'
import Register from './Register'
import { Navigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const multiStepContext=React.createContext()
const StepContext = () => {
    const [currentStep,setStep]=useState(1)
    const [userData,setUserData]=useState([])
    const [finalData,setFinalData]=useState(null)
    const navigate = useNavigate();
    const [err, setErr] = useState(false);
    async function submitData(){
        if(userData.Password.length>=6){
          setFinalData(userData)
          const displayName = userData.Username;
          const emailReal = userData.Email;
          const passwordReal = userData.Password;
    
          try {
            //Create user
            const res = await createUserWithEmailAndPassword(auth, emailReal, passwordReal);
            console.log('this happened1');
            //Create a unique image name
            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);
    
            try {
              console.log('this happened2');
              //Update profile
              await updateProfile(res.user, {
                displayName,
              });
              console.log('this happened3');
              //create user on firestore
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                emailReal,
              });
    
              //create empty user chats on firestore
              await setDoc(doc(db, "userChats", res.user.uid), {});
              navigate("/");
            } catch (err) {
              console.log(err);
              setErr(true);
              // setLoading(false);
            }
          } catch (err) {
            setErr(true);
            // setLoading(false);
          }
          
          setUserData([])
          }
          
        

        
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
