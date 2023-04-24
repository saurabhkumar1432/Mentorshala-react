import '../css/component/widgetLg.css'
import photo1 from '../../../images/AtulSahay.jpg'
import { useState,useEffect } from "react";
import http from '../../../http-common'


function WidgetLg() {
  

  const [mentorData, setMentorData] = useState([]);

  useEffect(()=>{
    http.get('/get/Mentee/details')
    .then(res=>{
      // console.log(res);
      setMentorData(res.data)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Mentors Registerd</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Name</th>
          <th className="widgetLgTh">Date</th>
          {/* <th className="widgetLgTh">Amount</th> */}
          <th className="widgetLgTh">Status</th>
        </tr>
        {
             mentorData.slice(0, 5).map((item)=>{
              return(      
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={item.profilePic}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{item.firstName} {item.lastName}</span>
          </td>
          <td className="widgetLgDate">14 May 2022</td>
          {/* <td className="widgetLgAmount">$2100.00</td> */}
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        )
      })
    }
      </table>
    </div>
  );
}

export default WidgetLg;