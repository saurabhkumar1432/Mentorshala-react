import MentorShalaDAO from '../dao/MentorShalaDAO.js'

export default class updateDetailsCtrl{
    static async updatePassword(obj){
        try{
            await MentorShalaDAO.updatePassword(obj)
            // console.log(userlists);
            // return userlists
        }
        catch{
            console.log("Can't update password");
            // return []
        }
    }
    static async updateProfilePhoto(obj){
        try{
            await MentorShalaDAO.updateProfilePhoto(obj)
          
        }
        catch{
            console.log("Can't update profile pic");
    
        }
    }
    static async updateProfileBanner(obj){
        try{
            await MentorShalaDAO.updateProfileBanner(obj)
     
        }
        catch{
            console.log("Can't update banner");
      
        }
    }
    static async updateprofile_liked(username,data){
        try{
            await MentorShalaDAO.updateLikeArray(username,data)
        }
        catch{
            console.log("can't update the array");
        }
    }
    static async update_Dont_show_again(username,data){
        try{
            await MentorShalaDAO.update_Dont_show_again_Array(username,data)
        }
        catch{
            console.log("can't update the array");
        }
    }
    static async matchListUpdate(username,data){
        try{
            await MentorShalaDAO.matchArrayUpdate(username,data)
        }
        catch{
            console.log("can't update the array");
        }
    }
}