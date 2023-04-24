import MentorShalaDAO from '../dao/MentorShalaDAO.js'

export default class usersDetailsCtrl{
    static async getUserByEmail(email){
        try{
            const user3=await MentorShalaDAO.getEmail(email);
            console.log(user3);
            return user3;
        }
        catch{
            console.log("User don't exist");
            return [];
        }
    }
    static async comparePassword(password){
        try{
            const user3=await MentorShalaDAO.getPassword(password);
            if(user3)
            return true;
            else
            return false;
        }
        catch{
            console.log("User don't exist");
            return [];
        }
    }
    static async getapiUsers(role){
        try{
            const userlists=await MentorShalaDAO.getUser(role)
            // console.log(userlists);
            return userlists
        }
        catch{
            console.log("Can't fetch data");
            return []
        }
    }
    static async getapiFeeds(){
        try{
            const feedslists=await MentorShalaDAO.getFeed()
            // console.log(userlists);
            return feedslists
        }
        catch{
            console.log("Can't fetch data");
            return []
        }
    }

    static async getapiReports(){
        try{
            const reportlists=await MentorShalaDAO.getReports()
            // console.log(userlists);
            return reportlists
        }
        catch{
            console.log("Can't fetch data");
            return []
        }
    }
    static async getMenteeCount(){
        try{
            const menteeCount=await MentorShalaDAO.menteeCount()
            return menteeCount
        }
        catch{
            console.log("Can't fetch data");
            return []
        }
    }
    static async getMentorCount(){
        try{
            const mentorCount=await MentorShalaDAO.mentorCount()
            return mentorCount
        }
        catch{
            console.log("Can't fetch data");
            return []
        }
    }
    static async getMatches(email){
        try{
            const user3=await MentorShalaDAO.getEmail(email);
            console.log(user3);
            return user3.match_list;
        }
        catch{
            console.log("User don't exist");
            return [];
        }
    }

}