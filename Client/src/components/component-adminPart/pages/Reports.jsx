import { useState,useEffect } from "react";
import http from '../../../http-common'
import '../css/page/report.css'
import { FaCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function ReportList() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    http.get('/getReports')
    .then(res=>{
      // console.log(res);
      setData(res.data)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  console.log(data);

  return (
    <div className="reportList">
      <table class="styled-table">
        <thead>
            <tr>
                <th>Username</th>
                <th>description</th>
                <th>delete Report</th>
                <th>delete User</th>
            </tr>
        </thead>
        <tbody>
          {
            data.map((item)=>{
              return(
                <tr>
                  <td>{item.username}</td>
                  <td>{item.description}</td>
                  <td className="reportbtns">
                    <button className="deleteReport"><ImCross /></button>
                  </td>
                  <td>
                  <button className="deleteUser"><FaCheckCircle /></button>
                  </td>
                </tr>
              )
            } )
          }
            
        </tbody>
      </table>
    </div>
  );
}

export default ReportList;
 