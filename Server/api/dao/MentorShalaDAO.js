import { query } from "express"
import bcrypt from "bcryptjs";
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
    static async getAllUsers(){
        if(mentorshalaUsers) return mentorshalaUsers
        else 
        return [];
    }
    static async getEmail(email){
        let cursor
        try{
            // console.log(email);
            cursor=await mentorshalaUsers.collection("usersDetails").find({Email:email})
        }
        catch(e){
            console.log(e);
        }
        try{
            const user2=await cursor.toArray();
            // console.log(user2);
            return user2;
        }catch(e){
            console.log(e);
        }
    }
    static async getPassword(password){
        let cursor
        try{
            password = await bcrypt.hash(password, 10);
            cursor=await mentorshalaUsers.collection("usersDetails").find({Password:password})
            console.log(password);
        }
        catch(e){
            console.log(e);
        }
        try{
            const user2=await cursor.toArray();
            console.log(user2);
            
            return user2;
        }catch(e){
            console.log(e);
        }
    }
    static async getUser(role){
        let cursor
        try{
            let query;
            if(role=="Mentor"){
                query={"role":"Mentee"}
            }
            else{
                query={"role":"Mentor"}
            }
            cursor=await mentorshalaUsers.collection("usersDetails").find(query)
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
    static async updatePassword(obj){
        const hashedPassword=await bcrypt.hash(obj.password,10)
        const query={username:username}
        const newItem={
            $set:{
                password:hashedPassword
            }
        }
        await mentorshalaUsers.collection("usersDetails").updateOne(query,newItem,(err,res)=>{
            if (err) throw err;
            console.log("1 document updated");
        })
       
    }

    static async updateProfilePhoto(obj){

        const query={username:username}
        const newItem={
            $set:{
                profilePic:obj.profilePic
            }
        }
        await mentorshalaUsers.collection("usersDetails").updateOne(query,newItem,(err,res)=>{
            if (err) throw err;
            console.log("1 document updated");
        })
       
    }
    static async updateProfileBanner(obj){

        const query={username:username}
        const newItem={
            $set:{
                banner:obj.banner
            }
        }
        await mentorshalaUsers.collection("usersDetails").updateOne(query,newItem,(err,res)=>{
            if (err) throw err;
            console.log("1 document updated");
        })
       
    }

    static async updateLikeArray(username,data){
        const query={username:username}
        const newItem={
            $push:{
                profile_match_list:data
            }
        }
        await mentorshalaUsers.collection("usersDetails").updateOne(query,newItem,(err,res)=>{
            if (err) throw err;
            console.log("1 document updated");
        })
    }
    static async update_Dont_show_again_Array(username,data){
        // console.log(data);
        const query={username:username}
        const newItem={
            $push:{
                dont_show_again:data.item
            }
        }
        await mentorshalaUsers.collection("usersDetails").updateOne(query,newItem,(err,res)=>{
            if (err) throw err;
            console.log("1 document updated");
        })
    }
    static async matchArrayUpdate(username,data){
        // console.log(data);
        const query={username:username}
        const newItem={
            $push:{
                match_list:data
            }
        }
        await mentorshalaUsers.collection("usersDetails").updateOne(query,newItem,(err,res)=>{
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

    static async getReports(){
        let cursor
        try{
            cursor=await mentorshalaUsers.collection("report").find()
            // console.log(cursor);
        }
        catch{
            console.log("cant get the data");
            return []
        }
        try{
            const reportsList=await cursor.toArray()
            return reportsList
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

    static async deleteReport(obj){
        try{
            console.log(obj);
            await mentorshalaUsers.collection("report").deleteOne(obj,(err,res)=>{
                if (err) throw err;
                console.log("report deleted");
            })
           
        }
        catch{
            console.log("cant delete the report");
        }

    }

    static async deleteUser(obj){
        try{
            await mentorshalaUsers.collection("usersDetails").deleteOne(obj,(err,res)=>{
                if (err) throw err;
                console.log("user deleted");
            })
           
        }
        catch{
            console.log("cant delete the user");
        }


    }
    static async postreport(obj){
        // let cursor
        try{
            await mentorshalaUsers.collection("report").insertOne(obj,(err,res)=>{
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