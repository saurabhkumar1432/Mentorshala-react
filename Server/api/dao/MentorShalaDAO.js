import { query } from "express"

let mentorshalaUsers

export default class mentorShalaDb{
    static async injectDB(conn){
        if(mentorshalaUsers) return mentorshalaUsers
        try{
            mentorshalaUsers=conn.db(process.env.MENTORSHAL_NS)
            console.log("connected to collection");
        }
        catch(e){
            console.error("error")
        }
    }
    static async getUser(){
        let cursor
        try{
            cursor=await mentorshalaUsers.collection("usersDetails").find()
            // console.log(cursor);
        }
        catch{
            console.log("cant get the data");
            return []
        }
        try{
            const usersList=await cursor.toArray()
            return usersList
        }
        catch{
            console.log("cant make it an array");
        }
    }
    // static async getUserLogin(email,password){
    //     let cursor;
    //     try{
    //         cursor=await mentorshalaUsers.find({})
    //     }
    // }
    static async updateUser(obj){
        const query={Email:obj.Email}
        // console.log("hello");
            // console.log(query);
        let reportValue;
        let cursor;
        try{
            cursor=await mentorshalaUsers.collection("usersDetails").find({Email:obj.Email})
        }
        catch{
            console.log("can't find");
        }
        try{
            const usersList=await cursor.toArray()
            reportValue=usersList[0].report
        }
        catch{
            console.log("cant make it an array");
        }
        const newvalues = {
            $set: {
                report:reportValue+1
            }
        };
        await mentorshalaUsers.updateOne(query,newvalues,(err,res)=>{
            if (err) throw err;
            console.log("1 document updated");
        })
    }
    static async getFeed(){
        let cursor
        try{
            cursor=await mentorshalaUsers.collection("feedCollection").find()
            // console.log(cursor);
        }
        catch{
            console.log("cant get the data");
            return []
        }
        try{
            const feedsList=await cursor.toArray()
            return feedsList
        }
        catch{
            console.log("cant make it an array");
        }
    }
    static async postFeed(obj){
        // let cursor
        try{
            await mentorshalaUsers.collection("feedCollection").insertOne(obj,(err,res)=>{
                if (err) throw err;
                console.log("1 document inserted");
            })
            // console.log(cursor);
        }
        catch{
            console.log("cant post the data");
        }
    }
    static async postUser(obj){
        // let cursor
        try{
            await mentorshalaUsers.collection("usersDetails").insertOne(obj,(err,res)=>{
                if (err) throw err;
                console.log("1 document inserted");
            })
            // console.log(cursor);
        }
        catch{
            console.log("cant post the data");
        }
    }
}