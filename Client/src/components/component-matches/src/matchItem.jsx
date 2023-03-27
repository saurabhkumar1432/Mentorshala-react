import React from 'react'
import './matchItem.css'
import { useState } from 'react';
import axios from 'axios';
// import { addToSet } from '../../../actions/action1';
// import {useDispatch,useSelector} from "react-redux";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const MatchItem = (props) => {
  const userDetail=
    {
      "firstName": "Abhishek",
      "lastName": "Singh",
      "profilePic": "https://i.pinimg.com/originals/36/fa/7b/36fa7b46c58c94ab0e5251ccd768d669.jpg",
      "banner": "https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      "from": "Delhi",
      "country": "India",
      "college": "IIIT Sri City",
      "specialization": "Web Development",
      "description": "Love to travel. Professional Vlogger. Been Places",
      "experience": [
        "Worked as front-end developer",
        "Working in IBM design department."
      ],
      "Linkedin": "https://www.linkedin.com/in/abhay-pratap-singh-878457203/",
      "Email": "abhishek.k20@iiits.in",
      "Password": "1234",
      "report": {
        "$numberLong": "0"
      },
      "role": "Mentee",
      "username": "abhishek_singh581",
      "profile_match_list": [
        {
          "firstName": "Abhay",
          "lastName": "Pratap",
          "role": "Mentor",
          "profilePic": "https://i.pinimg.com/originals/36/fa/7b/36fa7b46c58c94ab0e5251ccd768d669.jpg",
          "banner": "https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          "from": "Delhi",
          "country": "India",
          "college": "IIIT Delhi",
          "specialization": "Web Development",
          "description": "Avid book reader, always ready to learn new things.",
          "experience": [
            "Worked as front-end developer",
            "Working in IBM design department."
          ],
          "Linkedin": "https://www.linkedin.com/in/abhay-pratap-singh-878457203/",
          "Email": "abhaypratap.s20@iiits.in",
          "Password": "123",
          "report": {
            "$numberLong": "0"
          },
          "username": "abhay258"
        },
        
      ]
    }
  // const {firstValue} = useSelector((state)=> state.first);
  const [showMoreActive,setShowMoreActive]=useState(false)
  const profileDetails=props.contact;
  const index=props.index
  // console.log(profileDetails);
  const showMore=()=>{
    const Btn=document.getElementById('showMoreBtn')
    if(showMoreActive){
      setShowMoreActive(false)
      Btn.classList.remove('rotate')

    }
    else{
      setShowMoreActive(true)
      Btn.classList.add('rotate')
    }
  }
  const matchListUpdate=async()=>{
    await axios.post(`http://localhost:5000/api/v1/mentorshala/post/matchListUpdate/${userDetail.username}`,profileDetails)
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  return (
    <div className="matchItem-main-container">
      <img src={profileDetails.profilePic} alt="profile image" srcset="" />
      <div className="match-item-container">
          <div className="matchItem-div">
            <h5>{profileDetails.firstName} {profileDetails.lastName}</h5>
            <h6>{'('}{profileDetails.username}{')'}</h6>
            <button id='showMoreBtn' onClick={showMore}><KeyboardArrowDownIcon></KeyboardArrowDownIcon></button>
          </div>
          <div className="matchItem-div">
            <h6>{profileDetails.specialization}</h6> 
            <button onClick={matchListUpdate} className="accept-profile"> Accept</button> 
            <button className="reject-profile">Reject</button>
          </div>
          <div className={showMoreActive?'activeShow':'deactiveShow' }> 
            <div className="matchItem-div">
              <h6>Location: {profileDetails.from}, {profileDetails.country}</h6> 
            </div>
            <div className="matchItem-div">
              <h6>Education: {profileDetails.college}</h6> 
            </div>
            <div className="matchItem-div">
              <h6>Contact: <a href={profileDetails.Linkedin}>Linkedin</a></h6> 
            </div>
          </div>
      </div>
    </div>
  )
}

export default MatchItem
