import './chat.css'
import Contact from '../../component-contact/Contact'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import SendIcon from '@mui/icons-material/Send';
// import hachiman from '../../../images/hachiman.png'
import chatData from '../data/chatData.js'
import { useState } from 'react'
import { Contrast } from '@mui/icons-material'
import MessageBox from '../../component-contact/messageBox'
const ChatSec=({})=>{
    const contactList=chatData
    let [msgBox,SetMsgBox]=useState(0)
    let [msgObj,SetmsgObj]=useState(contactList[0])
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
        console.log(msgObj);
        function sendMessage(){
            console.log("something submitted");
        }
        return(
            <div id="chatContainer">
                <button className="goBack" onClick={()=>{
                    SetMsgBox(0);
                }}><BsFillArrowLeftCircleFill id="goBack"/></button>
                <div id="msgbox"><MessageBox class="d-flex mx-md-n8" msgObj={msgObj}/></div>
                <div id="inputBox">
                    <div  id="newMsgInput"><input type="text"/></div>
                    <div id="newMsgSubmit" >
                        <button onClick={()=>{
                            sendMessage()
                        }}><SendIcon/></button>

                    </div>
                </div>
                
            </div>
        )
    }
}

export default ChatSec
