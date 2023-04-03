//Creating token and saving in cookie

import getJWTToken from "./jwtT.js";

const sendToken = (user,statusCode,res)=>{
    user.getJWTToken = getJWTToken; // Define the getJWTToken function in the user object

    const token = user.getJWTToken(user);

    //options for cookie
    const options = {
        expires:new Date(
            Date.now() + process.env.COOKIE_EXPIRE*24*60*60*1000
        ),
        httpOnly:true
    };

    res.status(statusCode).cookie("token",token,options).json({
        success:true,
        user,
        token
    });
    // console.log(user);
    console.log(token);
};

export default sendToken;

