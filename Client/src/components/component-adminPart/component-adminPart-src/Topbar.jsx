import React from "react";
import "../component-adminPart-css/sidebar.css";
import "../component-adminPart-css/topbar.css";
import {NotificationsNone,Language,Settings} from '@mui/icons-material';

function Topbar(){
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">Admin</span>
                </div>
                <div className="topright">
                    <div className="topBarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topBarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topBarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://lh3.googleusercontent.com/a/ALm5wu3qlDVXjlW8TvAY7HbNW86djF3KUtTOtfYKuq7p=s360-p-rw-no" alt="" className="topAvatar"></img>
                </div>
            </div>
        </div>
    )
}

export default Topbar;