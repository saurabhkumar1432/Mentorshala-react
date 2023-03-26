import React from 'react'
import './matchItem.css'
import { useState } from 'react';
// import { addToSet } from '../../../actions/action1';
// import {useDispatch,useSelector} from "react-redux";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const MatchItem = (props) => {

  // const {firstValue} = useSelector((state)=> state.first);
  const [showMoreActive,setShowMoreActive]=useState(false)
  const profileDetails=props.contact;
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
            <button className="accept-profile"> Accept</button> 
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
