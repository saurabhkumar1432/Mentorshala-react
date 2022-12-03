import './MainPage.css'
import MessagePart from '../../component-messagePart/src/MessagePart'
import CardPart from '../../component-cardPart/src/CardPart'
const MainPage=()=>{
    return(
        <div className="row mainPage-container">
            <MessagePart/>
            <CardPart/>
        </div>
    )
}
export default MainPage