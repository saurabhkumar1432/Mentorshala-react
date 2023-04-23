import axios from "axios";

export default axios.create({
  baseURL: "https://mentorshala-backend.onrender.com/api/v1/mentorshala",
  headers: {
    "Content-type": "application/json",
  },
  method: "post",
});
