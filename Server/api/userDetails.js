import express from "express"
import MentorShalaDAO from './dao/MentorShalaDAO.js'
import fetchDetailsCtrl from './controller/fetchDetailsCtrl.js'
import updateDetailsCtrl from "./controller/updateDetailsCtrl.js"
import postFeedCtrl from "./controller/postDetailCtrl.js"
import multer from 'multer'
const upload = multer({ dest: './imgUpload/' })
const router=express.Router()

router.route("/getUsers").get(async(req,res)=>{
    const data=await fetchDetailsCtrl.getapiUsers()
    console.log(data);
    res.send(data)
})
router.route("/getFeeds").get(async(req,res)=>{
    const data=await fetchDetailsCtrl.getapiFeeds()
    // console.log(data);
    res.send(data)
})
router.post("/postFeeds",upload.single('media'),async(req,res)=>{

    console.log(req.body);
    console.log(req.file);
    if(req.file!=undefined){

        const obj={
            "username":req.body.username,
            "profile_image":req.body.profile_image,
            "work":req.body.work,
            "media":req.file.path,
            "caption":req.body.caption,
            "like":0
        }
        await postFeedCtrl.postapiFeeds(obj)
    }
    else{
        const obj={
            "username":req.body.username,
            "profile_image":req.body.profile_image,
            "work":req.body.work,
            "caption":req.body.caption,
            "like":0
        }
        await postFeedCtrl.postapiFeeds(obj)
    }
    
})
router.route("/reportUser").post(async(req,res)=>{
    // console.log(req.body);
    await updateDetailsCtrl.updateApiUsers(req.body)
})
router.route("/getFeeds").get(async(req,res)=>{
    const data=await usersDetailsCtrl.getapiFeeds()
    console.log(data);
    res.send(data)
})
export default router