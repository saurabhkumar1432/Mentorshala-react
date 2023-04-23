import Feed from "./feed"
import './main.css'
import Waves from "../component-cardPart/src/Waves"
const MainPage=(props)=>{
    const userData=props.userData
    return(
        <div id="mainPage-container">
            
            <Feed userData={userData}/>
        </div>
    )
}
export default MainPage