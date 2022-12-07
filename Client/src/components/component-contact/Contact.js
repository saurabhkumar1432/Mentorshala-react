import '../component-contact/Contact.css'

import ChatSec from '../component-chat/src/chat'
const Contact=(props)=>{
    // console.log(Name);
    
    return(
        <div id='contactContainerInner' className='d-flex'>
            <div>
                <img id="contactImage" src={props.contact.profilePic}></img>
            </div>
            <div>
                <div id="contactName" class="row"> {props.contact.firstName} {props.contact.lastName}</div>
                <div id="contactLastmessage" class="row">{props.contact.message[props.contact.message.length-1].content}</div>
            </div>
        </div>
            
        
    )
}
export default Contact