import './Card.css'
import SchoolIcon from '@mui/icons-material/School';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactsIcon from '@mui/icons-material/Contacts';
import EmailIcon from '@mui/icons-material/Email';
import ReportIcon from '@mui/icons-material/Report';
import { useState } from 'react';
import axios from 'axios';
const Card=(props)=>{
    const {id,firstName,lastName,profilePic,banner,from,country,college,specialization,description,experience,Linkedin,Email}=props.character
    // console.log(props);
    const [radioCheck,setRadioCheck]=useState([false,true]);
    const handleClickbtn=()=>{
        if(radioCheck[0]==false){
            setRadioCheck([true,false])
        }
        else{
            setRadioCheck([false,true])
        }
    }
    const reportHandler=async()=>{
        console.log(Email);
        await axios.post('http://localhost:5000/api/v1/mentorshala/reportUser',{'Email':Email}).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log("error");
        })
    }
    return(
        <div class="card">
            <img id="card-img-banner" src={banner} alt="Card image cap"></img>
           <img id='card-img-profilpic' src={profilePic} alt="profilPic"></img>
           <div id='card-body-container'>
                <input id='radioBtnCard1' type="radio" checked={radioCheck[0]}></input>
                <input id='radioBtnCard2' type="radio" checked={radioCheck[1]}></input>
                <div className='card-body-div first-card-body-div'>
                    <div id='report-div'>
                        <button onClick={reportHandler}><ReportIcon/></button>
                    </div>
                    <div id='name-div' className='div-firstPage'>
                        <h1>{firstName} {lastName}</h1>
                    </div>
                    <div id='div-city' className='div-firstPage'>
                        <h4><LocationOnIcon/> {from} , {country}</h4>
                    </div>
                    <div id='div-college' className='div-firstPage'>
                        <h4><SchoolIcon/> {college}</h4>
                    </div>
                    <div id='div-specialization' className='div-firstPage'>
                        <h4><LibraryBooksIcon/> {specialization}</h4>
                    </div>
                    <div id='div-description' className='div-firstPage'>
                        <h5>{description}</h5>
                    </div>
                    <button id='goToDescription' onClick={handleClickbtn}>Show More..</button>
                </div>
                <div className='card-body-div second-card-body-div'>
                    
                    <div id='exprerience-div'>
                        <h3><MilitaryTechIcon/>Experience: </h3>
                        <ul>{
                            experience.map((points)=>{
                                return(
                                    <li><ArrowRightIcon/>{points}</li>
                                )
                            })
                        }</ul>
                    </div>
                    <div id="Contact-div">
                        <h3><ContactsIcon/>Contact:</h3>
                        <ul>
                            <li><ArrowRightIcon/>Linkedin: <a href={Linkedin}><LinkedInIcon id="linkedin-compo" /></a></li>
                            <li><ArrowRightIcon/>Email:     <a href={Email}><EmailIcon id="email-compo"/></a></li>
                        </ul>
                    </div>
                    <button id='goToMainDiv' onClick={handleClickbtn}>Show Less..</button>
                </div>
            </div>
        
        </div>
    )
}
export default Card