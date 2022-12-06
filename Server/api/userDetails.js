import express from "express"
import MentorShalaDAO from './dao/MentorShalaDAO.js'
import fetchDetailsCtrl from './controller/fetchDetailsCtrl.js'
import updateDetailsCtrl from "./controller/updateDetailsCtrl.js"
const router=express.Router()

router.route("/getUsers").get(async(req,res)=>{
    const data=await fetchDetailsCtrl.getapiUsers()
    console.log(data);
    res.send(data)
})
router.route("/reportUser").post(async(req,res)=>{
    // console.log(req.body);
    await updateDetailsCtrl.updateApiUsers(req.body)
})
export default router