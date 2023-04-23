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
import fileUpload from "express-fileupload";
// import path from "path";
import errorMiddleware from "./middleware/error.js";
import multer from "multer";
import fs from "fs";

import fileupload from 'express-fileupload'; 
app.use(fileupload({useTempFiles: true}))


app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
// app.use(bodyParser.urlencoded({extended:true}));

app.use((req, res, next) => {
  if (req.url === '/register') {
    app.use(fileUpload());
    // fileUpload()(req, res, next);
  } else {
    next();
  }
});

//cors
app.use(
  cors({
    origin: ["http://localhost:3000","https://mentorshala.netlify.app","http://localhost:5000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    // allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// app.use(bodyParser)
app.use('/imgUpload',express.static('imgUpload'))
app.use("/api/v1/mentorshala",userDetails)
app.use("*",(req,res)=>{res.status(404).json("Not found")})


import cloudinary from "cloudinary";
import dotenv from "dotenv"

//config
if(process.env.NODE_ENV!=="PRODUCTION"){
  dotenv.config({ path: "/config.env" });
}

cloudinary.config({
  cloud_name: "dlw4ntoct",
  api_key: "192653251229322",
  api_secret: "FGk5EFFEp1Oq4tkZuNLtJy4D9EQ",
});



//multer register

// Creating uploads folder if not already present
// In "uploads" folder we will temporarily upload
// image before uploading to cloudinary
if (!fs.existsSync("./imgUpload")) {
  fs.mkdirSync("./imgUpload");
}

const upload = multer({ dest: "./imgUpload/" });

app.post("/register1",upload.single('avatar'),async (req, res, next) => {
  // req.file is the `profile-file` file
  // req.body will hold the text fields,
  // if there were any
    if(req.file)
    console.log(req.file.path);
    else
    console.log("no file uploaded");
    if (req.fileValidationError) {
      return res.status(400).send({ error: req.fileValidationError });
    }
    if (!req.file) {
      return res.status(400).send({ error: "Please select an image to upload" });
    }
}
);


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