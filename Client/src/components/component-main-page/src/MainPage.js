import './MainPage.css'
import MessagePart from '../../component-messagePart/src/MessagePart'
import CardPart from '../../component-cardPart/src/CardPart'
import Feed from '../../components.feed/feed'

import Community from '../../components.feed/main'
import { useState } from 'react'
import Waves from '../../component-cardPart/src/Waves'
const MainPage=()=>{
    const [active,setActive]=useState(false)
    console.log(active);
    return(
        <div className="row mainPage-container">
            <MessagePart setActive={setActive} active={active}/>
            <div id='cardpart' className={active?'remover':''}>
                <CardPart/>
            </div>
            <div id='community' className={active?'':'remover'}>
                <Waves/>
                <Community/>
            </div>
        </div>
    )
}
export default MainPage