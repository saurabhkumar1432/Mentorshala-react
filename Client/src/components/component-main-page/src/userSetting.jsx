import React from 'react';
import axios from 'axios';
import { useState } from 'react';


function UserSetting() {
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

  

  return (
    <div>
      <h2>User  Setting</h2>
      {/* //update password */}
      <form onSubmit={handlePasswordSubmit}>
        <label>
          New Password:
          <input type="password" value={newPassword} onChange={handlePasswordChange} />
        </label>
      
        <button type="submit">Update Information</button>
      </form>
      <br />
         {/* //update pp */}
      <form onSubmit={handleProfilePicSubmit}>
      <label>
          New Profile Picture URL:
          <input type="text" value={newProfilePic} onChange={handleProfilePicChange} />
        </label>
      
        <button type="submit">Update Information</button>
      </form>
        <br />
           {/* //update banner */}
        <form onSubmit={handleBannerSubmit}>
        <label>
          New Banner Picture URL:
          <input type="text" value={newBannerPic} onChange={handleBannerPicChange} />
        </label>
      
        <button type="submit">Update Information</button>
      </form>
        <br />
           {/* //delete acccount */}
      <button onClick={handleDeleteAccount}>Delete Account</button>
    </div>
  );
}

export default UserSetting;
