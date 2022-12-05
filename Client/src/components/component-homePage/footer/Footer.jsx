import React from 'react'
import './footer.css'
import Grid from '@mui/material/Grid';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import MentorShalaLogo from '../../../images/MentorShalaLogo.png'
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Footer = () => {
  return (
    <footer id='footerContainer'>
        <div id='footerContainer-Name'>
          <img src={MentorShalaLogo}></img>
          <h3>MentorShala</h3>
        </div>
        <div id="footerContainer-list">
            <div className="footerContainer-list-item">
              <h5>Services</h5>
              <ul>
                <li>Chat</li>
                <li>Card Swiping</li>
                <li>Community</li>
              </ul>
            </div>
            <div className="footerContainer-list-item">
              <h5>Partners</h5>
              <ul>
                <li>BYJU’S</li>
                <li>GradeUp</li>
                <li>Toppr</li>
                <li>Unacademy</li>
                <li>Vedantu</li>
              </ul>
            </div>
            <div className="footerContainer-list-item">
              <h5>Learning</h5>
              <ul>
                <li>E-Portal</li>
                <li>Reports</li>
                <li>Policies</li>
                <li>Terms</li>
              </ul>
            </div>
            <div className="footerContainer-list-item">
              <h5>Get In Touch</h5>
              <ul>
                <li><CallIcon/> +91 XXXXXXXXX</li>
                <li><EmailIcon/> mentorShala@gmail.com</li>
                <li><LocationOnIcon/> Mannat, mumbai, India </li>
              </ul>
            </div>
            <div className="footerContainer-list-item">
                <div><h5>Follow Us</h5></div>
                <div><InstagramIcon className='footer-icons'/>Instagram</div>
                <div><TwitterIcon className='footer-icons'/>Twitter</div>
                <div><YouTubeIcon className='footer-icons'/>Youtube</div>
                <div><WhatsAppIcon className='footer-icons'/>WhatsApp</div>
                
            </div>
        </div>
        
    </footer>
  )
}
export default Footer