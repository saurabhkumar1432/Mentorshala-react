import app from './server.js'
import mongodb from "mongodb"
import dotenv from 'dotenv'
import MentorShalaDAO from './api/dao/MentorShalaDAO.js'
dotenv.config()
const MongoClient=mongodb.MongoClient

const port=process.env.PORT || 8000

MongoClient.connect(
    process.env.MENTORSHALA_DB_URI,
).catch(e=>{
    console.error(e)
    process.exit(1)
}).then(async client=>{
    await MentorShalaDAO.injectDB(client)
    app.listen(port,()=>{
        console.log("listening");
    })
})