import React,{useRef,useEffect} from 'react';
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
import NewMsgBlock from '../../component-contact/NewMsgBlock';
const ChatSec=({})=>{
    const contactList=chatData
    let [msgBox,setMsgBox] = useState(0)
    let [msgObj,setMsgObj] = useState(contactList[0])
    let [newMsg,setNewMsg] = useState('')
    let [search,setSearch] = useState(true)
    let [searchValue,setSearchValue] = useState('')
    let [submitMsg,setSubmitMsg] = useState(0)
    const handler=(props)=>{
        if(msgBox===0){
            setMsgObj(props)
            setMsgBox(1)
        }
        else
            setMsgBox(0)
    }
    
    
    const newMsgRef = useRef()
    useEffect(()=>{
        if(newMsgRef.current!==undefined){
            console.log("this happened",newMsgRef)
            newMsgRef.current.scrollIntoView()
        }
        
        
    },[])   
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
        
        function submitMsgHandler(e){
            e.target.value=''
        }
        function sendMessage(newMsg){
            console.log(newMsg);
            setNewMsg(newMsg)
            setSubmitMsg(!submitMsg)
            msgObj.message.push({content:newMsg,sender:true})
            document.querySelector(".newMsgInput").value=''
            
            

            return (
                React.createElement(
                  "div",
                  {className: "newMsgBlock"},
                  "NewDiv",
                )
              )
        }
        function searchChatHandler(e){
            setSearch(!search)

            console.log("search")
        }
        return(
            <div id="chatContainer">
                <div id="chatNavbar">
                    <button className="goBack" onClick={()=>{setMsgBox(0);}}>
                        <BsFillArrowLeftCircleFill id="goBack"/>
                    </button>
                    {search ? <input type="text" onChange={(e)=>{setSearchValue(e.target.value);console.log(searchValue);}}/> : null}
                    {!search ? <button className="searchChat" onClick={searchChatHandler}>
                        search
                        <div id="searchChat"/>
                    </button>:null}

                </div>
                <div id="msgbox">
                    {submitMsg >= 0? <MessageBox id="messageBox" class="d-flex mx-md-n8" msgObj={msgObj} newMsg={newMsg} searchValue={searchValue}/>:null}
                    {!submitMsg ? <div ref={newMsgRef}><NewMsgBlock newMsg={newMsg}/></div>: null}
                </div>
                
                
                <div id="inputBox">
                    <button id="msgImage"><AddAPhotoOutlinedIcon style={{ color: 'white',height:'2.7vh',width:'2.7vh' }}/></button>
                    <div id="newMsgInput"><input className="newMsgInput" type="text" placeholder="Type message" onChange={(e)=>{setTimeout(()=>{setNewMsg(e.target.value)},2000)}}/></div>
                    <div id="newMsgSubmit">
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
