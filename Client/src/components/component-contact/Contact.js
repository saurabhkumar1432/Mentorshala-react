import '../component-contact/Contact.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import ChatSec from '../component-chat/src/chat'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {auth, firestore} from '../../firebase'
const Contact=(props)=>{
    // console.log(Name);
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });
    // const { text, uid, photoURL } = props.message;

    // uid === auth.currentUser.uid
    return(
        <div id='contactContainerInner' className='d-flex'>
            <div>
                <img id="contactImage" src={props.contact.profilePic}></img>
            </div>
            <div>
                <div id="contactName" class="row"> {props.contact.firstName} {props.contact.lastName}</div>
                <div id="contactLastmessage" class="row">{messages && messages[messages.length-1]["text"]}</div>
            </div>
        </div>
            
        
    )
}
export default Contact