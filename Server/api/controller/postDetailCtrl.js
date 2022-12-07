import mentorShalaDb from "../dao/MentorShalaDAO.js";

export default class postFeedCtrl{
    static async postapiFeeds(obj){
        try{
            await mentorShalaDb.postFeed(obj)
            // console.log(userlists);
            
        }
        catch{
            console.log("Can't post data");
        }
    }
    static async postapiUsers(obj){
        try{
            await mentorShalaDb.postUser(obj)
            // console.log(userlists);
            
        }
        catch{
            console.log("Can't post data");
        }
    }
}