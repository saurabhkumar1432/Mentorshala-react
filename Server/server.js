import express from 'express'
import cors from 'cors'
import userDetails from './api/userDetails.js'
// import bodyParser from 'body-parser'
const app=express()
app.use(cors())
app.use(express.json())
// app.use(bodyParser)
app.use('/imgUpload',express.static('imgUpload'))
app.use("/api/v1/mentorshala",userDetails)
app.use("*",(req,res)=>{res.status(404).json("Not found")})

export default app