import axios from "axios";

export default axios.create({
    baseURL:"https://mentorshala-backend-ffpd.onrender.com/api/v1/mentorshala",
    headers:{
        "Content-type":"application/json"
    }
});