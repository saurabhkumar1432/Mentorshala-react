import MentorShalaDAO from '../dao/MentorShalaDAO.js'

export default class deleteDetailsCtrl{
    static async deleteReports(obj){
        try{
            await MentorShalaDAO.deleteReport(obj)
    
        }
        catch{
            console.log("Can't delete report");
       
        }
    }

    static async deleteUsers(obj){
        try{
            await MentorShalaDAO.deleteUser(obj)
    
        }
        catch{
            console.log("Can't delete user");
           
        }
    }
        

}