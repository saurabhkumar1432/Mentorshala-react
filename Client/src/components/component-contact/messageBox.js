import React, { useRef, useState } from 'react';
import '../component-contact/messageBox.css'
import Particle from '../component-chat/particles'
import VideoCall from '../component-chat/src/videoCall'
import {auth, firestore} from '../../firebase'
// import {user2} from '../../components/component-homePage/login/Login'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import SendIcon from '@mui/icons-material/Send';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
export default function MessageBox(props) {

  // console.log(props.msgObj.firstName)
  
  // const hasSubsequence=(sub,msg)=>{
  //   sub=sub.toLowerCase()
  //   msg=msg.toLowerCase()
  //   let hasIt = false
  //   for(let i=0;i<msg.length;i++){
  //     let j=0;
  //     for(j=0;j<sub.length;j++){
  //       if(msg[i+j]!==sub[j]){
  //         break  
  //       }
  //     }
  //     if(j===sub.length){
  //       hasIt=true
  //       break
  //     }
  //   }
  //   return hasIt
  // }
  // console.log("this is it ",hasSubsequence("fined","i'm fine, just fine"),props.searchValue)
  // const scrollHandler=()=>{
  //   let msgDiv = document.querySelector(".msgbox");
  //   console.log("tguesa",msgDiv)
  // }
  // return (
  //   <div className="msgbox">
  //     {scrollHandler()}
  //   {props.msgObj.message.map(
  //     msg => {
  //         if(msg.sender===true && hasSubsequence(props.searchValue,msg.content)){
  //             return <div id="sentMessage">{msg.content}</div>
  //         }
  //         else if(msg.sender===false && hasSubsequence(props.searchValue,msg.content)){
  //             return <div id="receivedMessage" class="justify-content-right">{msg.content}</div>
  //         }
  //     }
  // )}
  // </div>
  
  // )
  const dummy = useRef();
  // console.log(user2);
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });
  
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }
  return(
    <>
    <div className='msgSpace'>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      <span ref={dummy}></span>
    </div>
    <div className="inpSection">
      <form className="msgForm" onSubmit={sendMessage}>
        <button id="msgImage"><AddAPhotoOutlinedIcon style={{ color: 'white',height:'2.7vh',width:'2.7vh' }}/></button>
        <div id="newMsgInput"><input className='newMsgInput' value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type message" /></div>

        <button type="submit" disabled={!formValue}>🕊️</button>
        {/* <div id="newMsgInput"><input className="newMsgInput" type="text" placeholder="Type message" onChange={(e)=>{setTimeout(()=>{setNewMsg(e.target.value)},2000)}}/></div>
        <div id="newMsgSubmit"><button onClick={()=>{sendMessage(newMsg);}}><SendIcon/></button></div> */}
      </form>
    </div>
    
    </>
  )
}
function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sentMessage' : 'receivedMessage';

  return (<>
    <div className={`message ${messageClass}`}>
      {/* <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} /> */}
      <p>{text}</p>
    </div>
  </>)
}