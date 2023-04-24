import '../css/component/widgetSm.css'
import photo1 from '../../../images/AtulSahay.jpg'

import { Visibility } from "@material-ui/icons";
import { useState,useEffect } from "react";
import http from '../../../http-common'



function WidgetSm() {
  const [menteeData, setMenteeData] = useState([]);

  useEffect(()=>{
    http.get('/get/Mentor/details')
    .then(res=>{
      // console.log(res);
      setMenteeData(res.data)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Mentee</span>
      <ul className="widgetSmList">
        {
      menteeData.slice(0, 5).map((item)=>{
        return(      
        <li className="widgetSmListItem">
        <img src={item.profilePic} alt="atul"  className="widgetSmImg"></img>
          <div className="widgetSmUser">
            <span className="widgetSmUsername"> {item.firstName} {item.lastName}</span>
            <span className="widgetSmUserTitle">{item.specialization}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Active
          </button>
        </li>
       )
      })
    }
      </ul>
    </div>
  );
}

export default WidgetSm;