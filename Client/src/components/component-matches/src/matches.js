import './matches.css'
import chatData from '../../component-chat/data/chatData'
import Contact from '../../component-contact/Contact'
const Matches=()=>{
    const contactList=chatData
    return(
        <div id="matchesContainer">
            {
                contactList.map(
                    contact => {
                        // console.log(contact.Name);
                        return <Contact contact={contact}/>
                    }
                ) 
            }
        </div>
    )
}
export default Matches