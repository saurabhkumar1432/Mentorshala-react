import './MainPage.css'
import MessagePart from '../../component-messagePart/src/MessagePart'
import CardPart from '../../component-cardPart/src/CardPart'
import Feed from '../../components.feed/feed'

import Community from '../../components.feed/main'
import { useState } from 'react'
import Waves from '../../component-cardPart/src/Waves'
const MainPage=()=>{
    const [activeParts,setActivePart]=useState(false)
    console.log(activeParts);
    return(
        <div className="row mainPage-container">
            <MessagePart setActivePart={setActivePart} activeParts={activeParts}/>
            <div id='cardpart' className={activeParts?'remover':'displayer'}>
                <CardPart/>
            </div>
            <div id='community' className={activeParts?'displayer':'remover'}>
                <Waves/>
                <Community/>
            </div>
        </div>
    )
}
export default MainPage