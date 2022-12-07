import '../css/component/widgetSm.css'
import photo1 from '../../../images/AtulSahay.jpg'

import { Visibility } from "@material-ui/icons";

function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Mentee</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
        <img src={photo1} alt="atul"  className="widgetSmImg"></img>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Banigo Kene</span>
            <span className="widgetSmUserTitle">Student</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
        <img src={photo1} alt="atul"  className="widgetLgImg"></img>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Saviour Blessing</span>
            <span className="widgetSmUserTitle">SDE Intern</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
        <img src={photo1} alt="atul"  className="widgetLgImg"></img>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Thompson Tasha</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
        <img src={photo1} alt="atul"  className="widgetLgImg"></img>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Afforah Pricila</span>
            <span className="widgetSmUserTitle">Student</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
        <img src={photo1} alt="atul"  className="widgetLgImg"></img>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Student</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;