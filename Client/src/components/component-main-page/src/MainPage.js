import './MainPage.css'
import MessagePart from '../../component-messagePart/src/MessagePart'
import CardPart from '../../component-cardPart/src/CardPart'
import Feed from '../../components.feed/feed'
import MenuIcon from '@mui/icons-material/Menu';
import Community from '../../components.feed/main'
import { useState } from 'react'
import Waves from '../../component-cardPart/src/Waves'
const MainPage=()=>{
    const [activeParts,setActivePart]=useState(false)
    console.log(activeParts);
    const slidingMessageWindow=()=>{
        document.getElementById('message-container').classList.add('slideWindow')
        // console.log("1");
    }
    return(
        <div className="mainPage-container">
            {/* <MessagePart setActivePart={setActivePart} activeParts={activeParts}/>
            <CardPart/> */}
            {/* hello */}
            <div className='mainPage-header'>
                <button className='menuBtn' onClick={slidingMessageWindow}><MenuIcon/></button><h4>MentoShala</h4>
            </div>
            <div className='contentDiv'>
                {/* <MessagePart setActivePart={setActivePart} activeParts={activeParts}/> */}
                {/* <CardPart/> */}
                <MessagePart/>
            </div>
        </div>
    )
}
export default MainPage