import data from '../../component-main-page/data/data.js'
import './MessagePart.css'
import {BsSearch,BsFillQuestionCircleFill,BsTools} from "react-icons/bs";
import SettingsIcon from '@mui/icons-material/Settings';
import ForumIcon from '@mui/icons-material/Forum';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import X from './renderer.js';
import UserSetting from '../../component-main-page/src/userSetting.jsx';
const MessagePart=(props)=>{
    const userDetail=props.userData
    // console.log(userDetail);
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
    let array=[true,false]
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
    // const Community=()=>{
    //     // console.log(props.props);
    //     console.log(props.activeParts);
    //     // props.setActive(true)
    //     if(props.activeParts==false){
    //         props.setActivePart(true);
    //     }
    //     else{
    //         props.setActivePart(false)
    //     }
    // }
    const SideBardisappear=()=>{
        document.getElementById('message-container').classList.remove('slideWindow')
    }
    return(
        <div className="messagePart" id='message-container'>
            {/* <div className='row modeChanger'>
                <div class="col-sm-2 d-flex">
                    <div class="p-2"><button id='messageBtn' className={isactive[0]? 'active': ''} onClick={()=>{handler(0)}}>Messages</button></div>
                    <div class="p-2"><button id='matchesBtn' className={isactive[1]? 'active': ''} onClick={()=>{handler(1)}}>Matches</button></div>
                </div>
            </div>
            <div className='row chatMessageSection'>
                    <X mode={mode}/>
            </div> */}
            <div className='mode-changer'>
                <button onClick={()=>{handler(0)}} className={isactive[0]? 'active': 'non-active'}>Messages</button>
                <button onClick={()=>{handler(1)}} className={isactive[1]? 'active': 'non-active'}>Matches</button>
            </div>
            <X mode={mode} userDetail={userDetail}/>
            <button onClick={SideBardisappear} className="closeSideBar"><CloseIcon/></button>
            <div className={props.settingState?'activeSetting':'deactiveSettingDiv'}>
                <UserSetting userDetail={userDetail} />
            </div>
        </div>

    )
}
export default MessagePart
