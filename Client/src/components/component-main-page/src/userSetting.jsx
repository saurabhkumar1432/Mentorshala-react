import React from 'react';
import axios from 'axios';
import { useState } from 'react';

import './userSetting.css'
import CreateIcon from '@mui/icons-material/Create';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
function UserSetting(props) {
  const [newPassword, setNewPassword] = useState('');
  const [newProfilePic, setNewProfilePic] = useState('');
  const [newBannerPic, setNewBannerPic] = useState('');

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleProfilePicChange = (event) => {
    setNewProfilePic(event.target.value);
  };

  const handleBannerPicChange = (event) => {
    setNewBannerPic(event.target.value);
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();

  };

  const logOut=()=>{
    localStorage.clear();
  }
  const handleProfilePicSubmit = (event) => {
    event.preventDefault();

  };

  const handleBannerSubmit = (event) => {
    event.preventDefault();

  };

  const handleDeleteAccount = async(obj)=>{
    const userObj={"username":obj};
    console.log(userObj);
    await axios.post('http://localhost:5000/api/v1/mentorshala/deleteUser',userObj).catch((err)=>{
            console.log("error");
    })
  }
  const userDetail=props.userDetail
  
  return (
    <div className='settingContainer'>
      <h4>Setting</h4>
      <div className="profileImageUpdate" style={{background:`url(${userDetail.banner})`,backgroundPosition: 'center center'}}>
        <img src={userDetail.profilePic} alt="profilePic" />
        <label htmlFor="changeDP">
          <CreateIcon style={{color:"white"}}/>
          <input type="file" name="changeDP" id="changeDP" />
        </label>
      </div>
      <div className='bannerUpdate'>
        <label htmlFor="changeBanner">
            <CameraAltIcon style={{color:"white"}}/>
            <input type="file" name="changeBanner" id="changeBanner" />
          </label>
        </div>
      <div className="user-info">
          <h4>{userDetail.firstName} {userDetail.lastName} {'('}{userDetail.role}{')'}</h4>
          <h6>{'('}{userDetail.username}{')'}</h6>
          <h6>{userDetail.from} {','} {userDetail.country}</h6>
          <h6>{userDetail.college}</h6>
          <h6>{userDetail.specialization}</h6>
      </div>
      {/* //update password */}
      <div className="formContainerSetting">
        <h6>Change Name:</h6>
        <form className="updatingForm" onSubmit={handlePasswordSubmit}>
          <input type="text"  onChange={handlePasswordChange} placeholder='Change First Name'/>
          <button type="submit">Save</button> 
        </form>
          <br />
          <form className="updatingForm" onSubmit={handlePasswordSubmit}>
          <input type="text"  onChange={handlePasswordChange} placeholder='Change Last Name'/>
          <button type="submit">Save</button> 
        </form>
      </div>
      <div className="formContainerSetting">
        <h6>Change Password:</h6>
        <form className="updatingForm" onSubmit={handlePasswordSubmit}>
          <input type="password"  onChange={handlePasswordChange} placeholder='New Password'/>
          <button type="submit">Save</button> 
        </form>
          <br />
          <form className="updatingForm" onSubmit={handlePasswordSubmit}>
          <input type="password"  onChange={handlePasswordChange} placeholder='Confirm new password'/>
          <button type="submit">Save</button> 
        </form>
      </div>
      <div className="formContainerSetting">
        <h6>Change Location:</h6>
        <form className="updatingForm" onSubmit={handlePasswordSubmit}>
          <input type="text"  onChange={handlePasswordChange} placeholder='Change City'/>
          <button type="submit">Save</button> 
        </form>
          <br />
          <form className="updatingForm" onSubmit={handlePasswordSubmit}>
          <input type="text"  onChange={handlePasswordChange} placeholder='Change Country'/>
          <button type="submit">Save</button> 
        </form>
      </div>

      <div className="formContainerSetting">
        <h6>Change Work:</h6>
        <form className="updatingForm" onSubmit={handlePasswordSubmit}>
          <input type="text"  onChange={handlePasswordChange} placeholder='Change College Name'/>
          <button type="submit">Save</button> 
        </form>
          <br />
          <form className="updatingForm" onSubmit={handlePasswordSubmit}>
          <input type="text"  onChange={handlePasswordChange} placeholder='Change Specialization'/>
          <button type="submit">Save</button> 
        </form>
      </div>
        <br />
           {/* //delete acccount */}
      <button onClick={handleDeleteAccount} style={{background: '#3457D5'}}>Delete Account</button>
      <a href="/"><button onClick={logOut} style={{background: '#3457D5'}}>Log Out</button></a>
 
    </div>
  );
}

export default UserSetting;
