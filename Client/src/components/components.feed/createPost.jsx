import './createPost.css'
import './createDialogBox.css'
import Card from '@mui/material/Card';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventIcon from '@mui/icons-material/Event';
// import CreateDialogBox from './createDialogBox';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import axios from 'axios';
// import httpCommon from '../../htttp.common';
const CreatePost=()=>{
    const [dialogBox,setDialogBox]=useState(false)
    const [media,setMedia]=useState()
    const profile_image="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
    const username="Abhishek Singh";
    const work="CSE UG-3 Indian Institute of Technology";
    const postingFeed=async()=>{
        setDialogBox(false);
        const caption=document.getElementById("caption").value
        // console.log(caption);
        const formData={
            caption:caption,
            media:media,
            username:username,
            work:work,
            profile_image:profile_image
        }
        console.log(formData);
        await axios.post('https://mentorshala-backend.onrender.com/api/v1/mentorshala/login',formData).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log("error");
        })
    }
    const fileSelectHandler=(event)=>{
        console.log(event);
        setMedia(event.target.files[0])
    }
   return(
        <>
            <div id='createPost-container' className={dialogBox?"not-active":""}>
                <Card id="createPost-card">
                    <div className="card-image">
                        <img src={profile_image}></img>
                    </div>
                    <div className="card-createPost">
                        <button onClick={()=>{setDialogBox(true)}}>Create+</button>
                    </div>
                </Card>
            </div>

            <div id='createBox-container' className={dialogBox?"":"not-active"}>
            <Card id='createBox-card'>
                <div id="cretaeBox-username">
                    <div id="user-img">
                        <img src={profile_image}></img>
                    </div>
                    <div id='user-name'>
                        <div className="cardHeader-title-name">
                            {username}
                        </div>
                        <div className='cardHeader-title-work'>
                            {work}
                        </div>
                    </div>
                    <button onClick={()=>{setDialogBox(false)}}><CloseIcon/></button>
                </div>
                <div id='createBox-textArea'>
                    <textarea type="text" id='caption' placeholder='Write the post'></textarea>
                </div>
                <div style={{display:"flex",padding:"0% 1%",height:"10%",margin:"1% 0%"}}>
                    <button id='postBtn' onClick={postingFeed}>Post</button>
                </div>
                <div id="createBox-button">
                        <label for="chooseImage2"><i><PhotoSizeSelectActualIcon className='svg_icons'/>Photos</i></label>
                        <input type="file" id="chooseImage2" onChange={fileSelectHandler} style={{display:"none"}} ></input>
                        
                        <label for="chooseVideo2"><i><VideoLibraryIcon className='svg_icons'/>Videos</i></label>
                        <input type="file" id="chooseVideo2" onChange={fileSelectHandler} style={{display:"none"}}></input>
                        <label for="chooseEvent2"><i><EventIcon className='svg_icons'/>Events</i></label>
                        <input type="file" id="chooseEvent2" onChange={fileSelectHandler} style={{display:"none"}}></input>
                </div>
            </Card>
            </div>
        </>
   )
}
export default CreatePost