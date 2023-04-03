import '../css/component/featuredInfo.css'
import { useState,useEffect } from "react";
import http from '../../../http-common'

function FeaturedInfo() {

  const [menteeCount, setMenteeCount] = useState(0);
  const [mentorCount, setMentorCount] = useState(0);


  useEffect(()=>{
    http.get('/get/Mentor/details')
    .then(res=>{
      // console.log(res);
      setMenteeCount(res.data.length)
    })
    .catch(err=>{
      console.log(err);
    })
    http.get('/get/Mentee/details')
    .then(res=>{
      console.log(res);
      setMentorCount(res.data.length)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
//store minimum of mentee and mentor count in matches
  const matches = Math.min(menteeCount,mentorCount);

  // useEffect(()=>{
  //   http.get('/menteeCount')
  //   .then(res=>{
  //     // console.log(res);
  //     setMenteeCount(res.data)
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //   })
  //   http.get('/mentorCount')
  //   .then(res=>{
  //     console.log(res);
  //     setMentorCount(res.data)
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //   })
  // },[])

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Mentor Registerd</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{mentorCount}</span>
          
        </div>
       
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Mentee Registerd</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{menteeCount}</span>
         
        </div>
       
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">total Matches</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{matches}</span>
         
        </div>
      </div>
    </div>
  );
}

export default FeaturedInfo;