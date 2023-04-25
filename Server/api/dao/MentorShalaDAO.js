import { query } from "express"
import bcrypt from "bcryptjs";
let mentorshalaUsers

export default class mentorShalaDb{
    static async injectDB(conn){
        if(mentorshalaUsers) return mentorshalaUsers
        try{
            mentorshalaUsers=conn.db(process.env.MENTORSHAL_NS)
            console.log("connected to collection");
            await mentorshalaUsers.collection("usersDetails").createIndex({ Email: 1 });
            console.log("index created on Email field");
        }
        catch(e){
            console.log("error4")
            console.error(e)
        }
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
            console.log(user2);
            return user2;
        }catch(e){
            console.log(e);
        }
    }
    static async getMatch(email){
        let cursor
        try{
            cursor=await mentorshalaUsers.collection("usersDetails").find({Email:email})
        }
        catch(e){
            console.log(e);
        }
        try{
            const user2=await cursor.toArray();
            console.log(user2);
            return user2.match_list;
        }catch(e){
            console.log(e);
        }
    }
    static async getPassword(password){
        let cursor
        try{
            password = await bcrypt.hash(password, 10);
            cursor=await mentorshalaUsers.collection("usersDetails").find({Password:password})
        }
        catch(e){
            console.log(e);
        }
        try{
            const user2=await cursor.toArray();
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
    
    //static async function code for updateName
    static async updateName(obj){
        const query={username:obj.username}
        const newItem={
            $set:{
                firstName:obj.firstName,
                lastName:obj.lastName
            }

        }
        await mentorshalaUsers.collection("usersDetails").updateOne(query,newItem,(err,res)=>{
            if (err) throw err;
            console.log("1 document updated");
        })
    }

    static async updateEmailPass(obj){
        const query={username:obj.username}
        const newItem={
            $set:{
                Email:obj.email,
                Password:obj.password
            }

        }
        await mentorshalaUsers.collection("usersDetails").updateOne(query,newItem,(err,res)=>{
            if (err) throw err;
            console.log("1 document updated");
        })
    }
    
    
    static async updateCityCountry(obj){
        const query={username:obj.username}
        const newItem={
            $set:{
                from:obj.city,
                country:obj.country
            }

        }
        await mentorshalaUsers.collection("usersDetails").updateOne(query,newItem,(err,res)=>{
            if (err) throw err;
            console.log("1 document updated");
        })
    }
    static async updateCollegeSpecialization(obj){
        const query={username:obj.username}
        const newItem={
            $set:{
                college:obj.college,
                specialization:obj.specialization
            }

        }
        await mentorshalaUsers.collection("usersDetails").updateOne(query,newItem,(err,res)=>{
            if (err) throw err;
            console.log("1 document updated");
        })
    }


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
        const pullquery={$pull: { 'profile_match_list': { 'username': data.username } }}
        await mentorshalaUsers.collection("usersDetails").updateOne(query,pullquery,(err,res)=>{
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
                console.log("user deleted");
                if (err) throw err;
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
    static async menteeCount(){
        try{
       const mentee= await this.getUser("Mentee")
       return mentee.length
        }
        catch{
            console.log("cant get the mentee count");
            return []
        }
       
    }
    static async mentorCount(){
        try{
            const mentor= await this.getUser("Mentor")
            return mentor.length
             }
             catch{
                 console.log("cant get the mentor count");
                 return []
             }
       
    }
}