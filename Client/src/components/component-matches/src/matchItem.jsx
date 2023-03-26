import React from 'react'
import './matchItem.css'
const MatchItem = (props) => {
  const profileDetails=props.contact;
  // console.log(profileDetails);
  return (
    <div className="matchItem-main-container">
      <img src={profileDetails.profilePic} alt="profile image" srcset="" />
      <div className="match-item-container">
          <div className="matchItem-div">
            <h5>{profileDetails.firstName} {profileDetails.lastName}</h5>
            <h6>{'('}{profileDetails.username}{')'}</h6>
          </div>
          <div className="matchItem-div">
            <h6>{profileDetails.specialization}</h6> 
          </div>
          <div className="matchItem-div justify-center">
            <button className="accept-profile">Accept</button> 
            <button className="reject-profile">Reject</button> 
          </div>
      </div>
    </div>
  )
}

export default MatchItem
