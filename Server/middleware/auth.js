import ErrorHandler from "../utils/errorhandler.js";
import catchAsyncErrors from "./catchAsyncErrors.js";
import jwt from "jsonwebtoken";
// import db from "../utils/database";
// import mentorShalaDb from "../api/dao/MentorShalaDAO.js";
import fetchDetailsCtrl from "../api/controller/fetchDetailsCtrl.js";

export const isAuthenticatedUser = catchAsyncErrors(async(req,res,next)=>{

    const db = fetchDetailsCtrl.apiGetUsers();
    console.log(db);

    const {token} = req.cookies;

    // console.log(token);
    if(!token){
        throw new ErrorHandler("Please Login to access this resource",401);
    }

    const decodedData = jwt.verify(token,process.env.JWT_SECRET);

    const user = await db.query(
        "SELECT * FROM users WHERE id = ?",
        decodedData.id
      );

      if (!user) {
        throw new ErrorHandler("User not found", 404);
      }
    
      req.user = user;
    
    next();
});

export const authorizeRoles = (...roles) => {
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            throw new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resource`,403);
        }

        next();
    }
}