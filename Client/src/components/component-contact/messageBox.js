import React,{useForceUpdate} from 'react'
import '../component-contact/messageBox.css'
export default function MessageBox(props) {
  console.log(props.msgObj.firstName)
  
  const hasSubsequence=(sub,msg)=>{
    sub=sub.toLowerCase()
    msg=msg.toLowerCase()
    let hasIt = false
    for(let i=0;i<msg.length;i++){
      let j=0;
      for(j=0;j<sub.length;j++){
        if(msg[i+j]!==sub[j]){
          break  
        }
      }
      if(j===sub.length){
        hasIt=true
        break
      }
    }
    return hasIt
  }
  console.log("this is it ",hasSubsequence("fined","i'm fine, just fine"),props.searchValue)
  const scrollHandler=()=>{
    let msgDiv = document.querySelector(".msgbox");
    console.log("tguesa",msgDiv)
  }
  return (
    <div className="msgbox">
      {scrollHandler()}
    {props.msgObj.message.map(
      msg => {
          if(msg.sender===true && hasSubsequence(props.searchValue,msg.content)){
              return <div id="sentMessage">{msg.content}</div>
          }
          else if(msg.sender===false && hasSubsequence(props.searchValue,msg.content)){
              return <div id="receivedMessage" class="justify-content-right">{msg.content}</div>
          }
      }
  )}
  </div>
  )
}
