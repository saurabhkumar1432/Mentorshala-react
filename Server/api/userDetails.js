import express from "express";
import MentorShalaDAO from "./dao/MentorShalaDAO.js";
import fetchDetailsCtrl from "./controller/fetchDetailsCtrl.js";
import updateDetailsCtrl from "./controller/updateDetailsCtrl.js";
import postFeedCtrl from "./controller/postDetailCtrl.js";
import multer from "multer";
import ErrorHandler from "../utils/errorhandler.js";
// import sendToken from "../utils/jwtToken.js";
// import sendEmail from "../utils/sendEmail.js";
// import crypto from "crypto";
import cloudinary from "cloudinary";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import fs from "fs";

// Creating uploads folder if not already present
// In "uploads" folder we will temporarily upload
// image before uploading to cloudinary
if (!fs.existsSync("./imgUpload")) {
  fs.mkdirSync("./imgUpload");
}

import catchAsyncErrors from "../middleware/catchAsyncErrors.js";

const upload = multer({ dest: "./imgUpload/" });
const router = express.Router();


router.route('/getUserDetail/:email').get(async(req,res)=>{
  const data=await fetchDetailsCtrl.getUserByEmail(req.params.email)
  // console.log(data);
  res.send(data)
})

router.route(`/get/:role/details`).get(async (req, res) => {
  const role = req.params.role;
  // console.log(role);
  const data = await fetchDetailsCtrl.getapiUsers(role);
  // console.log(data);
  res.send(data);
});
router.route("/getFeeds").get(
  catchAsyncErrors(async (req, res, next) => {
    const data = await fetchDetailsCtrl.getapiFeeds();
    // console.log(data);
    res.send(data);
  })
);
// router.post('/createUser',upload.single('media'),async(req,res)=>{
//     console.log(req.body);
//     const obj={
//         "firstName":req.body.firstName,
//         "lastName":req.body.lastName,
//         "profilePic":"https://i.pinimg.com/originals/36/fa/7b/36fa7b46c58c94ab0e5251ccd768d669.jpg",
//         "banner":"https://images.unsplash.com/photo-15  81882897974-fca44f329313?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
//         "from":req.body.from,
//         "country":req.body.country,
//         "college":req.body.college,
//         "specialization":req.body.specialization,
//         "description":req.body.description,
//         "experience": [
//             "Worked in flipkart for 6 years.",
//             "Working in Google."
//           ],
//           "Linkedin":"https://www.linkedin.com/in/abhishek-singh-4233b8201/",
//           "Email":req.body.Email,
//           "Password":"123",
//           "report":0
//     }
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
//     try{
//         await postFeedCtrl.postapiUsers(obj)
//     }
//     catch{
//         console.log("can't register");
//     }
//     res.redirect('https://mentorshala.netlify.app/main')
// })

router.route("/register").post(catchAsyncErrors(async (req, res, next) => {
    // if(req.file)
    // console.log(req.file.path);
    // else
    // console.log("no file uploaded");
    
    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "avatars",
      width: 150,
      crop: "scale",
    });

    // const myCloud1 = await cloudinary.v2.uploader.upload(req.body.banner, {
    //   folder: "banners",
    //   width: 150,
    //   crop: "scale",
    // });

    const user = {
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      Email: req.body.email,
      Password: req.body.password,
      from: req.body.from,
      country: req.body.country,
      college: req.body.college,
      specialization: req.body.specialization,
      experience: req.body.experience,
      Linkedin: req.body.linkedin,
      description: req.body.description,
      report: 0,
      role: req.body.role,
      resetPasswordToken: "",
      resetPasswordExpire: "",
      profilePic: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
      match_list:[],
      profile_match_list:[],
      dont_show_again:[],

      // avatar:req.file.path,
      // banner: {
      //   public_id: myCloud1.public_id,
      //   url: myCloud1.secure_url,
      // },
    };

    if (user.Password && user.Password !== user.Password) {
      next();
    }
    user.Password = await bcrypt.hash(user.Password, 10);

    try {
      await postFeedCtrl.postapiUsers(user);
    } catch {
      console.log("can't register");
    }
    // res.redirect("http://localhost:3000/main");
    
}));
router.route("/postReport").post(async(req,res)=>{
    // console.log(req.body);
    await postFeedCtrl.postReportedUser(req.body)
})


// Generate a JWT token
function generateToken(user) {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
}
router.route("/deleteReport").post(async(req,res)=>{
    console.log(req.body);
    await MentorShalaDAO.deleteReport(req.body)
})
// Verify the JWT token
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.id;
  } catch (err) {
    return null;
  }
}

// router.route("/login").post(
//   catchAsyncErrors(async (req, res, next) => {
//     const { email, password } = req.body;
router.route("/deleteUser").post(async(req,res)=>{
    console.log(req.body);
    await MentorShalaDAO.deleteUser(req.body)
})

//     // Find the user by email
//     const user = await getUserByEmail(email);
router.route("/updatePassword").post(async(req,res)=>{
    console.log(req.body);
    await MentorShalaDAO.updatePassword(req.body)

})

router.route("/updateProfilePhoto").post(async(req,res)=>{
    console.log(req.body);
    await MentorShalaDAO.updateProfilePhoto(req.body)

})

router.route("/updateProfileBanner").post(async(req,res)=>{
    console.log(req.body);
    await MentorShalaDAO.updateProfileBanner(req.body)

})

router.route("/getFeeds").get(async(req,res)=>{
    const data=await usersDetailsCtrl.getapiFeeds()
    console.log(data);
    res.send(data)
})

//     if (!user) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     // Verify the password
//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     // Generate a JWT token
//     const token = generateToken(user);

//     res.status(200).json({ token });
//   })
// );


// function generateToken(user) {
//   return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRE,
//   });
// }

//LOGIN USER
router.route("/login").post(catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  //checking if user has given password and email both
  const user1={
    username:email,
    password:password
  };
  
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const user = await fetchDetailsCtrl.getUserByEmail( email );
  console.log(user);
  if (!user) {
    return next(new ErrorHandler("Invalid email ", 401));
  }

  const isPasswordMatched = await fetchDetailsCtrl.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Password", 401));
  }
  if(user && isPasswordMatched){
    const token = generateToken(user1);
  console.log(token);
  }
  // sendToken(user, 200, res);
})
);

//Logout User
router.route("/logout").get(catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out Successfully",
  });
}));

// Generate a password reset token
// export function generateResetToken() {
//   const token = crypto.randomBytes(20).toString("hex");
//   const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
//   return { token, hashedToken };
// }

// Verify a password reset token
// export function verifyResetToken(token, hashedToken) {
//   const verified = crypto.timingSafeEqual(
//     Buffer.from(hashedToken),
//     Buffer.from(crypto.createHash("sha256").update(token).digest("hex"))
//   );
//   return verified;
// }


router.post("/postFeeds", upload.single("media"), async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);
  if (req.file != undefined) {
    const obj = {
      username: req.body.username,
      profile_image: req.body.profile_image,
      work: req.body.work,
      media: req.file.path,
      caption: req.body.caption,
      like: 0,
    };
    await postFeedCtrl.postapiFeeds(obj);
  } else {
    const obj = {
      username: req.body.username,
      profile_image: req.body.profile_image,
      work: req.body.work,
      caption: req.body.caption,
      like: 0,
    };
    await postFeedCtrl.postapiFeeds(obj);
  }
});

router.route("/login").post(catchAsyncErrors(async (req, res, next) => {}));

router.route("/reportUser").post(async (req, res) => {
  // console.log(req.body);
  await updateDetailsCtrl.updateApiUsers(req.body);
});

router.route("/getReports").get(async (req, res) => {
  const data = await fetchDetailsCtrl.getapiReports();
  res.send(data);
});

router.route("/deleteReport").delete(async (req, res) => {
  await MentorShalaDAO.deleteReport(req.body);
});

router.route("/deleteUser").delete(async (req, res) => {
  await MentorShalaDAO.deleteUser(req.body);
});

router.route("/getFeeds").get(async (req, res) => {
  const data = await usersDetailsCtrl.getapiFeeds();
  console.log(data);
  res.send(data);
});

router.route("/post/liked-profile/:username").post(async (req, res) => {
  const username = req.params.username;
  const profilelike = req.body;
  await updateDetailsCtrl.updateprofile_liked(username, profilelike);
});
router.route("/post/dont_show/:username").post(async (req, res) => {
  const username = req.params.username;
  const data = req.body;
  await updateDetailsCtrl.update_Dont_show_again(username, data);
});

router.route('/post/matchListUpdate/:username').post(async(req,res)=>{
    const username=req.params.username
    const data=req.body;
    // console.log(data);
    await updateDetailsCtrl.matchListUpdate(username,data)
});


router.route('/adminAuth').post(async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const adminUserName = "adminMentorshala";
    const adminPassword = "admin@123";
    if(username===adminUserName && password===adminPassword){
        res.sendStatus(200)
    }
    else{
        res.sendStatus(201)
    }
})

router.route("/menteeCount").get(async (req, res) => {
  const data = await fetchDetailsCtrl.getMenteeCount();
  res.send(data);
});

router.route('/mentorCount').get(async(req,res)=>{
    const data=await MentorShalaDAO.mentorCount()
    console.log(data);
    res.send(data)
})
export default router
