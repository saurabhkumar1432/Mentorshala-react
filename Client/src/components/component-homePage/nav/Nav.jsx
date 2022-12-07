import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillBook} from 'react-icons/ai'
import {RiServiceFill} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

import{useState} from 'react'

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#');
  return (
   <nav>
    <a href="#ps5" onClick={()=>setActiveNav('#ps5')}className={activeNav==='#'?'active':''}><AiOutlineHome/> </a>
    <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''} ><AiOutlineUser/> </a>
    <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''} ><BiMessageSquareDetail/> </a>
    <a href="#footerContainer" onClick={()=>setActiveNav('#footerContainer')} className={activeNav==='#experience'?'active':''} ><AiFillBook/> </a>
    
    
   </nav>
  )
}

export default Nav
