import React from 'react';
import './chat.css'
import Contact from '../../component-contact/Contact'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import SendIcon from '@mui/icons-material/Send';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
// import hachiman from '../../../images/hachiman.png'
import chatData from '../data/chatData.js'
import { useState } from 'react'
import { Contrast } from '@mui/icons-material'
import MessageBox from '../../component-contact/messageBox'
const ChatSec=({})=>{
    const contactList=chatData
    let [msgBox,SetMsgBox]=useState(0)
    let [msgObj,SetmsgObj]=useState(contactList[0])
    let [newMsg,setNewMsg] =useState('')
    console.log('this is the beginning')
    console.log(msgObj)
    const handler=(props)=>{
        if(msgBox===0){
            SetmsgObj(props)
            SetMsgBox(1)
        }
        else
            SetMsgBox(0)
    }
    if(msgBox===0){

        return(
            
            contactList.map(
                contact => {
                    // console.log(contact.Name);
                    return <button id="contactContainer" class="d-flex" onClick={()=>{handler(contact)}}><Contact contact={contact}/></button>
                }
            ) 
        )
    }
    else{
        console.log("hello")
        console.log(msgObj.message);
        function sendMessage(newMsg){
            console.log(newMsg);
            msgObj.message.push({content:newMsg,fromMe:true})
            console.log(msgObj.message);
            return (
                React.createElement(
                  "div",
                  {className: "newMsgBlock"},
                  "NewDiv",
                )
              )
        }
        return(
            <div id="chatContainer">
                <button className="goBack" onClick={()=>{
                    SetMsgBox(0);
                }}><BsFillArrowLeftCircleFill id="goBack"/></button>
                <div id="msgbox"><MessageBox class="d-flex mx-md-n8" msgObj={msgObj}/></div>
                <div id="inputBox">
                    <button id="msgImage"><AddAPhotoOutlinedIcon style={{ color: 'white',height:'2.7vh',width:'2.7vh' }}/></button>
                    <div id="newMsgInput"><input type="text" placeholder="Type message" onChange={(e)=>{setNewMsg(e.target.value)}}/></div>
                    <div id="newMsgSubmit" >
                        <button onClick={()=>{
                            sendMessage(newMsg);
                        }}><SendIcon/></button>

                    </div>
                </div>
                
            </div>
        )
    }
}

export default ChatSec
