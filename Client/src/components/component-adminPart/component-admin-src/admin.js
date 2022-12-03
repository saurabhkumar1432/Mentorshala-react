import React from "react";
import Topbar from "../component-adminPart-src/Topbar";
import Sidebar from "../component-adminPart-src/Sidebar";

function Admin(){
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                
            </div>
        </div>
    );
}

export default Admin;