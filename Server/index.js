import app from './server.js'
import mongodb from "mongodb"
import dotenv from 'dotenv'
import MentorShalaDAO from './api/dao/MentorShalaDAO.js'
dotenv.config({path:"config.env"})


const MongoClient=mongodb.MongoClient


const port=process.env.PORT || 8000
console.log(port);

MongoClient.connect(
    process.env.MENTORSHALA_DB_URI,
).catch(e=>{
    // console.log("error1")
    console.error(e)
    process.exit(1)
}).then(async client=>{
    await MentorShalaDAO.injectDB(client)
    // console.log("error2")
    app.listen(port,()=>{
        // console.log("error3")
        console.log("listening");
    })
})