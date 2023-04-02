import ErrorHandler from "../utils/errorhandler.js";

export default function(err,req,res,next){
    console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";


    //Wrong mongodb id error
    if(err.name==="CastError"){
        const message = `Resource not found. Invalid:${err.path}`;
        err = new ErrorHandler(message,400);
    }

    //Mongoose duplicate error
    if(err.code===11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err  = new ErrorHandler(message,400);
    }

    //Wrong JWT error
    if(err.name==="JsonWebTokenError"){
        const message = `Json Web Token is Invalid, Try again`;
        err = new ErrorHandler(message,400);
    }

    //JWT Expire error
    if(err.name==="TokenExpiredError"){
        const message = `Json Web Token is Expired, Try again`;
        err = new ErrorHandler(message,400);
    }

    res.status(err.statusCode).json({
        success:false,
        message:err.message
    });
}