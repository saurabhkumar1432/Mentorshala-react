import Carddata from '../../component-cardPart/data/card-data.js'
import '../component-adminPart-css/Dashboard.css'
function Dashboard() {
    return(
        <div id='dashboardContainer'>
            {Carddata.map((character, index) => {
            return (
              <div className='userd'>
                <div id='dashboardContainer-nameDiv'>{character.firstName} {character.lastName}</div>
                <div id='dashboardContainer-country'>{character.country}</div>
                <div id='dashboardContainer-college'>{character.college}</div>
              </div>

            )
        })}
        </div>
    )
}
export default Dashboard