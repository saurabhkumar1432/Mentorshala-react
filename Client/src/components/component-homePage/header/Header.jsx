import React from 'react'
import './header.css'
// import LogoImg from '../../../images/m4.jpg'
import mlogo from '../../../images/mlogo.png'
import Grid from '@mui/material/Grid';
import bannerImg from '../../../images/bannerImg.svg'
const Header = () => {
  return (
    <div className='header'>
      <Grid container spacing={2} id="header-grid">
        <Grid item xs={2} className="coloumns-grid">
          <img src={mlogo} alt="Logo" id="mlogo"></img><h4>MentorShala</h4>
        </Grid>
        <Grid item xs={10} className="coloumns-grid">
            <div id='header-nav-items'>
              <div className='nav-item'><a href='#'><h5>About</h5></a></div>
              <div className='nav-item'><a href='#'><h5>Contacts</h5></a></div>
              <div className='nav-item'><a href='#'><h5>Partners</h5></a></div>
            </div>
            <button><a href='/admin'>Admin</a></button>
            <button><a href='/login'>Login</a></button>
        </Grid>
      </Grid>
      <div id='bannerText'>
          <h1>You Will Teach And In Teach You Will Learn.</h1>
      </div>
      <svg id='wave2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fff" fill-opacity="1" d="M0,256L30,256C60,256,120,256,180,224C240,192,300,128,360,133.3C420,139,480,213,540,213.3C600,213,660,139,720,128C780,117,840,171,900,181.3C960,192,1020,160,1080,122.7C1140,85,1200,43,1260,26.7C1320,11,1380,21,1410,26.7L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        <defs>
        <linearGradient id="MyGradient" x2={"0%"} y2={ "100%"}>
          <stop offset="0%" stop-color="rgb(55 213 214/0.4)" />
          <stop offset="100%" stop-color="#ffff" />
        </linearGradient>
      </defs>
      </svg>
      <svg id='wave1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffff" fill-opacity="1" d="M0,256L30,256C60,256,120,256,180,224C240,192,300,128,360,133.3C420,139,480,213,540,213.3C600,213,660,139,720,128C780,117,840,171,900,181.3C960,192,1020,160,1080,122.7C1140,85,1200,43,1260,26.7C1320,11,1380,21,1410,26.7L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
      </svg>
      
      <img id='bannerImg' src={bannerImg}></img>
    </div>
  )
}
export default Header