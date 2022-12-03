import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer_logo'>
        MentorShala
      </a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer_socials'>
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://twitter.com"><IoLogoTwitter /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; MentorShala Website.All Rights Reserved.</small>
      </div>
    </footer>
  )
}
export default Footer