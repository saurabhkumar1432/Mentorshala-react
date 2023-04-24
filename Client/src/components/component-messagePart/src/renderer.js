// import { render } from "@testing-library/react"
import { Component } from "react";
import './renderer.css'
import ChatSec from "../../component-chat/src/chat";
import Matches from "../../component-matches/src/matches";
const X=(props)=>{
    let checkedArray=[true,false];
    const userDetail=props.userDetail
    // console.log(userDetail);
    if(props.mode.id===0){
        checkedArray[0]=true;
        checkedArray[1]=false;
    }
    else{
        checkedArray[0]=false;
        checkedArray[1]=true;
    }
    return(
        <div class="scroll">
            <input type="radio" className="radioBtn" name="radio-btn" id="radio1" checked={checkedArray[0]}></input>
            <input type="radio" className="radioBtn" name="radio-btn" id="radio2" checked={checkedArray[1]}></input>
            <div className="modeCards first chatSec">
                <ChatSec userDetail={userDetail}/>
            </div>
            <div className="modeCards">
                <Matches profile_match_list={userDetail.profile_match_list} userDetail={userDetail}/> 
            </div>
            
        </div>
    )
}
export default X