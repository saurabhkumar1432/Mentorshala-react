import MentorShalaDAO from '../dao/MentorShalaDAO.js'

export default class updateDetailsCtrl{
    static async updateApiUsers(obj){
        try{
            await MentorShalaDAO.updateUser(obj)
            // console.log(userlists);
            // return userlists
        }
        catch{
            console.log("Can't update data");
            // return []
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
}