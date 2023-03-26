import MentorShalaDAO from '../dao/MentorShalaDAO.js'

export default class usersDetailsCtrl{
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
}