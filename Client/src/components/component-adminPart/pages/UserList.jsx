// import "./userList.css";
import '../css/page/userList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import http from '../../../http-common'
function UserList() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    http.get('/getUsers')
    .then(res=>{
      // console.log(res);
      setData(res.data)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  console.log(data);
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  
  const columns = [
    // { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "firstName",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.profilePic} alt="" />
            {params.row.firstName}
          </div>
        );
      },
    },
    { field: "Email", headerName: "Email", width: 200 },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 120,
    // },
    // {
    //   field: "transaction",
    //   headerName: "Transaction Volume",
    //   width: 160,
    // },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Link to={"/admin/user/" + params.row.id}>
    //           <button className="userListEdit">Edit</button>
    //         </Link>
    //         <DeleteOutline
    //           className="userListDelete"
    //           // onClick={() => handleDelete(params.row.id)}
    //         />
    //       </>
    //     );
    //   },
    // },
  ];

  return (
    <div className="userList">
      <table class="styled-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>College</th>
                <th>Specialization</th>
                <th>location</th>
            </tr>
        </thead>
        <tbody>
          {
            data.map((item)=>{
              return(
                <tr>
                  <td>{item.firstName} {item.lastName}</td>
                  <td>{item.Email}</td>
                  <td>{item.college}</td>
                  <td>{item.specialization}</td>
                  <td>{item.from}</td>
                </tr>
              )
            } )
          }
            
        </tbody>
      </table>
    </div>
  );
}

export default UserList;