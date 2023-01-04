import axios from "axios";

export default axios.create({
    baseURL:"http://mentorshala-backend.up.railway.app/api/v1/mentorshala",
    headers:{
        "Content-type":"application/json"
    }
});