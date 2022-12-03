import React from 'react'
import '../component-contact/messageBox.css'
export default function MessageBox(props) {
  console.log(props.msgObj.firstName)
  return (
    props.msgObj.message.map(
      msg => {
          if(msg.sender===true){
              return <div id="sentMessage">{msg.content}</div>
          }
          else{
              return <div id="receivedMessage" class="justify-content-right">{msg.content}</div>
          }
      }
  )
  )
}
