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
}