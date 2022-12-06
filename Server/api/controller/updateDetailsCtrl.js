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
}