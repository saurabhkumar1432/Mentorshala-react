import React from 'react'
import './header.css'
import LogoImg from '../../../images/m4.jpg'
const Header = () => {
  return (
    <div className='header'>
      <div className="image_container">
        <img src={LogoImg} className='logo'/>
      </div>
      <div className="name">
       <h2>MentorShala</h2>
      </div>
     
       
      
      <div className="side_container">
      <a href='/admin'><h3>Admin</h3></a>
        <a href='/login'><h3>Login</h3></a>
      </div>
    </div>
  )
}
export default Header