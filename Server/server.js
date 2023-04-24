import express from 'express'
import cors from 'cors'
import userDetails from './api/userDetails.js'
// import bodyParser from 'body-parser'
import morgan from 'morgan'
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'


//swagger documentation

// const options = {
//     definition: {
//       openapi: "3.0.0",
//       info: {
//         title: "mentorshala API",
//         version: "1.0.0",
//         description: "multiple mentorshala API"
//       },
//       servers: [
//         {
//           url: "http://localhost:5000"
//         }
//       ]
//     },
//     apis: ["./api/userDetails.js"]
//   };
  
//   const specs = swaggerJsDoc(options);
  

const app=express();



// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));


import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";
// import fileUpload from "express-fileupload";
// import path from "path";
import errorMiddleware from "./middleware/error.js";

import fileupload from 'express-fileupload'; 
app.use(fileupload({useTempFiles: true}))


app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
// app.use(bodyParser.urlencoded({extended:true}));

//cors
app.use(cors());

// app.use(bodyParser)
app.use('/imgUpload',express.static('imgUpload'))
app.use("/api/v1/mentorshala",userDetails)
app.use("*",(req,res)=>{res.status(404).json("Not found")})



// const server = httpServer.listen(process.env.PORT,()=>{
//     console.log("Server is working on : ", process.env.PORT);
// })

//Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});


//Middleware for errors
app.use(errorMiddleware);

export default app;