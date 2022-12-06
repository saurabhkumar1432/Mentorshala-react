import './MainPage.css'
import MessagePart from '../../component-messagePart/src/MessagePart'
import CardPart from '../../component-cardPart/src/CardPart'
import Feed from '../../components.feed/feed'

import Community from '../../components.feed/main'
import { useState } from 'react'
const MainPage=()=>{
    const [active,setActive]=useState(false)
    return(
        <div className="row mainPage-container">
            <MessagePart/>
            <CardPart />
            {/* <Community/> */}
        </div>
    )
}
export default MainPage