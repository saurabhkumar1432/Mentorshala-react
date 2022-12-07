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
router.post('/createUser',upload.single('media'),async(req,res)=>{
    console.log(req.body);
    const obj={
        "firstName":req.body.firstName,
        "lastName":req.body.lastName,
        "profilePic":"https://i.pinimg.com/originals/36/fa/7b/36fa7b46c58c94ab0e5251ccd768d669.jpg",
        "banner":"https://images.unsplash.com/photo-1581882897974-fca44f329313?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
        "from":req.body.from,
        "country":req.body.country,
        "college":req.body.college,
        "specialization":req.body.specialization,
        "description":req.body.description,
        "experience": [
            "Worked in flipkart for 6 years.",
            "Working in Google."
          ],
          "Linkedin":"https://www.linkedin.com/in/abhishek-singh-4233b8201/",
          "Email":req.body.Email,
          "Password":"123",
          "report":0
    }
    // const {email,firstname,lastname,specialization,country,from,college,description}=req.body;
    // if(!email||!firstname||!lastname||!specialization||!country||!from||!college||!description){
    //     return res.status(422).json({error:'pls fill field properly'});
    // }
    // try{
    //     const userExist=await User.findOne({email:email});
    //     if(userExist){
    //         return res.status(422).json({error:'Email already Exist'});
    //     }
    //     else{
    //         const user=new User({email,firstname,lastname,specialization,country,from,college,description});
        
    //     await newData.save();
    //     res.status(201).json(newData);
    //     }
    // }
    // catch(error){
    //     req.status(409).json({message:error.message});
    // }
    try{
        await postFeedCtrl.postapiUsers(obj)
    }
    catch{
        console.log("can't register");
    }
    res.redirect('http://localhost:3000/main')
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