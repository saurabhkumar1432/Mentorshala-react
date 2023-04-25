import React,{useRef,useEffect} from 'react';
import './chat.css'
import Contact from '../../component-contact/Contact'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
// import hachiman from '../../../images/hachiman.png'
import chatData from '../data/chatData.js'
import { useState } from 'react'
import { Contrast } from '@mui/icons-material'
import MessageBox from '../../component-contact/messageBox'
import NewMsgBlock from '../../component-contact/NewMsgBlock';
import Particle from '../particles';
import {Search} from './Search';
import {Chats} from "./Chats"
import {Chat} from "./Chat.jsx"
import Axios from 'axios'
const ChatSec=(props)=>{
    const contactList2 = async (email)=> {
        try{
            console.log(email);
        const Contacts = await Axios.get(`https://mentorshala-backend.onrender.com/api/v1/mentorshala/getUserDetail/${email}`);
        console.log("these are the contacts",Contacts)
        return Contacts.match_list;
    }
        catch(err){
            console.log(err);
            console.log("Siddharth");
        }
    }
    // const contactList=contactList2("siddian17.7@gmail.com")
    let contactList;
    if(props.userDetail.match_list!=null){
        contactList=props.userDetail.match_list;
    }
    else{
        contactList=[]
    } 
    console.log(contactList);
    console.log("this is the array: ",contactList)
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
            <>
            {/* <Search/> */}
            {/* <Chats/>*/}
            
            {contactList.map(
                contact => {
                    // console.log(contact.Name);
                    return <button id="contactContainer" class="d-flex" onClick={()=>{handler(contact)}}><Contact contact={contact}/></button>
                }
            )}
            
            </>
             
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
        function videoCallHandler(){
            
        }
        function voiceCallHandler(){
            
        }
        return(
            <>
            
            {/* <Particle style="position:absolute;"/> */}
            <div id="chatContainer">
                
                <div id="chatNavbar">
                    <button className="goBack" onClick={()=>{setMsgBox(0);}}>
                        <BsFillArrowLeftCircleFill id="goBack"/>
                    </button>
                    <button className="voiceCall" onClick={()=>{voiceCallHandler()}}>
                        <CallIcon id="voiceCall"/>
                    </button>
                    <button className="videoCall" onClick={()=>{videoCallHandler()}}>
                        <VideoCallIcon id="videoCall"/>
                    </button>
                    {!search ? <input type="text" id="searchInput" onChange={(e)=>{setSearchValue(e.target.value);console.log(searchValue);}}/> : null}
                    {search ? <button className="searchChat" onClick={searchChatHandler}>
                        
                        <div id="searchChat">
                            <SearchIcon style={{color:'white'}}/>
                        </div>
                    </button>:<button className="searchChat" onClick={searchChatHandler}>
                        <div id="searchChat">
                            <SearchIcon style={{color:'white'}}/>
                        </div>
                    </button>}

                </div>
                <div id="msgbox">
                    {submitMsg >= 0? <MessageBox id="messageBox" class="d-flex mx-md-n8" msgObj={msgObj} newMsg={newMsg} searchValue={searchValue}/>:null}
                    {/* {!submitMsg ? <div ref={newMsgRef}><NewMsgBlock newMsg={newMsg}/></div>: null} */}
                </div>
                
                
                {/* {msgBox===1?<div id="inputBox">
                    <button id="msgImage"><AddAPhotoOutlinedIcon style={{ color: 'white',height:'2.7vh',width:'2.7vh' }}/></button>
                    <div id="newMsgInput"><input className="newMsgInput" type="text" placeholder="Type message" onChange={(e)=>{setTimeout(()=>{setNewMsg(e.target.value)},2000)}}/></div>
                    <div id="newMsgSubmit">
                        <button onClick={()=>{
                            // sendMessage(newMsg);
                        }}><SendIcon/></button>

                    </div>
                </div>:null} */}
                
            </div></>
        )
    }
}

export default ChatSec
