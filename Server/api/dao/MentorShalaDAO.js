import { query } from "express"

let mentorshalaUsers

export default class mentorShalaDb{
    static async injectDB(conn){
        if(mentorshalaUsers) return mentorshalaUsers
        try{
            mentorshalaUsers=conn.db(process.env.MENTORSHAL_NS).collection("usersDetails")
            console.log("connected to collection");
        }
        catch(e){
            console.error("error")
        }
    }
    static async getUser(){
        let cursor
        try{
            cursor=await mentorshalaUsers.find()
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
}