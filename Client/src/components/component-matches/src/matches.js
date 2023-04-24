import './matches.css'
import chatData from '../../component-chat/data/chatData'
// import Contact from '../../component-contact/Contact'
import MatchItem from './matchItem'
import { useState } from 'react'
const Matches=(props)=>{
    const userDetails=props.userDetail;
    const [matchList,setMatchList]=useState(props.profile_match_list);
    console.log(matchList);
    return(
        <div id="matchesContainer">
            {
                matchList?.map((
                  contact ,index)=> {
                        // console.log(contact.Name);
                        return <MatchItem contact={contact} index={index} userDetail={userDetails} setMatchList={setMatchList} matchList={matchList}/>
                    }
                ) 
            }
        </div>
    )
}
export default Matches