import React, { useState } from "react";

function Settings(){

    const options = [
        {
            header:{
                name:"Account",
            },
            values:[
                {
                    name:"Profile",
                    description:"Your email address is your identity on this app and is used to login.",
                    tags:[
                        "email",
                        "first name",
                        "last name"
                    ],
                },
                {
                    name:"Email/Password",
                    description:"Change your email adress/password.",
                    tags:[
                        "email",
                        "password",
                        "new email",
                        "password",
                        "new password"
                    ],
                },
                {
                    name:"Close Account",
                    description:"Close your account on this website.",
                    tags:[
                        "password",
                        "reason",
                    ],
                },
            ],
        },
        {
            header:{
                name:"Account",
            },
            values:[
                {
                    name:"Profile",
                    description:"Your email address is your identity on this app and is used to login.",
                    tags:[
                        "email",
                        "first name",
                        "last name"
                    ],
                },
                {
                    name:"Email/Password",
                    description:"Change your email adress/password.",
                    tags:[
                        "email",
                        "password",
                        "new email",
                        "password",
                        "new password"
                    ],
                },
                {
                    name:"Close Account",
                    description:"Close your account on this website.",
                    tags:[
                        "password",
                        "reason",
                    ],
                },
            ],
        },
    ];

    const [visibleOptions,setVisibleOptions]=useState(options);

    function handlechange(event){
        event.preventDefault();
        const value=event.target.value;

        console.log(value);

        if(value.trim().length===0){
            setVisibleOptions(options);
            return;
        }

        const returnedItems = [];

        visibleOptions.forEach((options,index) => {
            const foundOptions = options.values.filter((item) => {
                return (item.name.toLowerCase().search(value.trim().toLowerCase())!==-1 || item.description.toLowerCase().search(value.trim().toLowerCase())!==-1)
            });

            returnedItems[index]={
                header:{
                    name:options.header.name,
                },
                values:foundOptions,
            };

        if(options.header.name.toLowerCase().search(value.trim().toLowerCase())!==-1){
            returnedItems[index]={
                header:{
                    name:options.header.name,
                },
                values:options[index].values,
            };
        }

    });

        setVisibleOptions(returnedItems);
    };

    return (
        <div className="Settings">
            <div className="container my-5">
                <h1>
                    <span style={{color:"white"}}>
                    <a href="/main" style={{textDecoration:"none"}}><button className="btn btn-secondary">
                        {" "}
                        <span>&lt;</span> Back{" "}
                    </button>{" "}</a>
                    Settings
                    </span>
                </h1>
                <input type="text" className="form-control mt-5" onChange={handlechange} placeholder="Search.." />
                <div>
                    {visibleOptions.map((options) => (
                        <div key={options.header.name} className="mt-5 mt-2">
                        <h3>{options.header.name}</h3>

                        <div>
                            {options.values.map((values) => (
                                <div key={values.name}>
                                <ul className="list-group">
                                    <li className="list-group-item mb-2">
                                        <h6 className="font-weight-bold">{values.name}</h6>
                                        <p>{values.description}</p>
                                    </li>
                                </ul>
                                </div>
                            ))}
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Settings;