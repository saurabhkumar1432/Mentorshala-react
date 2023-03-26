import { useState,useEffect } from "react";
import http from '../../../http-common'
import '../css/page/report.css'

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
            </tr>
        </thead>
        <tbody>
          {
            data.map((item)=>{
              return(
                <tr>
                  <td>{item.username}</td>
                  <td>{item.description}</td>
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
 