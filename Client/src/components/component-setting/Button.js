import React from "react";

function Button (props){
    return (
         <span style={{ color: "white" }}>
            <a href="/main" style={{ textDecoration: "none" }}>
              <button className="btn btn-secondary">
                {" "}
                <span>&lt;</span> Back{" "}
              </button>{" "}
            </a>
          </span> 
    );
}

export default Button;