import React from "react";
import "../component-adminPart-css/sidebar.css";
import "../component-adminPart-css/topbar.css";
import {LineStyle,Person,Timeline} from '@mui/icons-material';
import Dashboard from "./dashboard";
function Sidebar(){
    function analytics(){
        console.log("analytics");
        document.getElementById('dashboard-div').style.display="block"
    }
    return (
        <div className="admin-container">
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                        <button onClick={analytics}>
                        <li className="sidebarListItem">
                            <Person className="sidebarIcon"/>
                            Users
                        </li>
                        </button>
                       
                        <button onClick={analytics}>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        </button>
                       
                    </ul>
                </div>
            </div>
        </div>

            <div id="dashboard-div">
            <Dashboard/>
            </div>
        </div>
        
    )
}

export default Sidebar;