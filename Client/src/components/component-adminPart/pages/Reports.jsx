import { useState,useEffect } from "react";
import http from '../../../http-common'
import '../css/page/report.css'
import { FaCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import axios from 'axios'

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

  const deleteReport=async(obj)=>{
    const reportObj={"username":obj};
    
    await axios.post('https://mentorshala-backend.onrender.com/api/v1/mentorshala/deleteReport',reportObj).catch((err)=>{
            console.log("error");
    })
  }

  const deleteUser=async(obj)=>{
    const userObj={"username":obj};
    console.log(userObj);
    await axios.post('https://mentorshala-backend.onrender.com/api/v1/mentorshala/deleteUser',userObj).then(await axios.post('https://mentorshala-backend.onrender.com/api/v1/mentorshala/deleteReport',userObj)).catch((err)=>{
            console.log("error");
    })
  }

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
                    <button className="deleteReport" onClick={()=>{deleteReport(item.username)}}><ImCross /></button>
                  </td>
                  <td>
                  <button className="deleteUser" onClick={()=>{deleteUser(item.username)}}><FaCheckCircle /></button>
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
 