// const firebaseConfig = {
//     apiKey: "AIzaSyDighUtw1RQIg4gIGSjJqU6irjH26xxmj8",
//     authDomain: "registration-c520f.firebaseapp.com",
//     databaseURL: "https://registration-c520f-default-rtdb.firebaseio.com",
//     projectId: "registration-c520f",
//     storageBucket: "registration-c520f.appspot.com",
//     messagingSenderId: "632679553928",
//     appId: "1:632679553928:web:83ce87c31297e8b281383d",
//     measurementId: "G-KDHSKYN5K5"
//   };

// firebaseConfig.initializeApp(firebaseConfig);
// let registerFormDB=firebaseConfig.databaseURL().ref('registerForm');
// document.getElementById("registerForm").addEventListener("submit",submitForm);

// function submitForm(e){
//     e.preventDefault();
//     let firstname=getElementVal('firstname');
//     let lastname=getElementVal('lastname');
//     let email=getElementVal('email');
//     let from=getElementVal('from');
//     let country=getElementVal('country');
//     let college=getElementVal('college');
//     let specialization=getElementVal('specialization');
//     let description=getElementVal('description');
//     console.log(firstname,lastname,email,from,college,country,specialization,description);
//     saveMessage(firstname,lastname,email,from,college,country,specialization,description)
// }
// const saveMessage=(firstname,lastname,email,from,college,country,specialization,description)=>{
// let newRegisterForm=registerFormDB.push();
// newRegisterForm.set({
//             Email: email,
//             Firstname: firstname,
//             Lastname: lastname,
//             Specialization: specialization,
//             Description: description,
//             From: from,
//             Country: country,
//             College:college,
// })
// }
// const getElementVal=(id)=>{
//     return document.getElementById(id).value;
// }
