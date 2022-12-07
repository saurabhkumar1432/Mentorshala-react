import data from '../../component-main-page/data/data.js'
import './MessagePart.css'
import {BsSearch,BsFillQuestionCircleFill,BsTools} from "react-icons/bs";
import SettingsIcon from '@mui/icons-material/Settings';
import ForumIcon from '@mui/icons-material/Forum';
import { useState } from 'react';
import X from './renderer.js';
const MessagePart=(props)=>{
    const modes=[
        {
            id:0,
            name:"message",
            component: "here_should_be_the_component",
            active:true
        },
        {
            id:1,
            name:"matches",
            component: "here_should_be_the_component",
            active:false,
        },
    ]
    const [mode,Setmode]=useState(modes[0])
    let array=[true,false,false]
    const [isactive,Setisactive]=useState(array)
    const settingHandler=()=>{

    }
    const handler=(id)=>{
        if(id===1){
            Setisactive([false,true])
        }
        else{
            Setisactive([true,false]);
        }
        return Setmode(modes[id]);
    }
    const Community=()=>{
        // console.log(props.props);
        console.log(props.active);
        // props.setActive(true)
        if(props.active==false){
            props.setActive(true);
        }
        else{
            props.setActive(false)
        }
    }
    return(
        <div className="col-4 messagePart">
            <div className="row messagePart-profile">
                <div className="col-sm-2 messagePart-profile-pic">
                    <img src={data.profilePic} alt="profilePic"></img>
                </div>
                <div className="col-sm-6 messagePart-profile-name"><a href='#'>{data.firstName}</a></div>
                <div className="col-sm-4 messagePart-profil-explore">
                    <a href='/setting'><button id="setting-btn" onClick={settingHandler}><SettingsIcon /></button></a>
                    {/* <button id="community-btn"><ForumIcon/></button> */}
                    <a id="community-btn" href='/community'><ForumIcon /></a>
                </div>
            </div>
            <div className='row modeChanger'>
                <div class="col-sm-2 d-flex">
                    <div class="p-2"><button id='messageBtn' className={isactive[0]? 'active': ''} onClick={()=>{handler(0)}}>Messages</button></div>
                    <div class="p-2"><button id='matchesBtn' className={isactive[1]? 'active': ''} onClick={()=>{handler(1)}}>Matches</button></div>
                </div>
            </div>
            <div className='row chatMessageSection'>
                    <X mode={mode}/>
            </div>
        </div>

    )
}
export default MessagePart
