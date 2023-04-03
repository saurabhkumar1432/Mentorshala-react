import '../css/component/featuredInfo.css'
import { useState,useEffect } from "react";
import http from '../../../http-common'

function FeaturedInfo() {

  const [menteeCount, setMenteeCount] = useState(0);
  const [mentorCount, seMentorCount] = useState();

  useEffect(()=>{
    http.get('/menteeCount')
    .then(res=>{
      // console.log(res);
      setMenteeCount(res.data)
    })
    .catch(err=>{
      console.log(err);
    })
   
  },[])

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
          <span className="featuredMoney">500</span>
         
        </div>
      </div>
    </div>
  );
}

export default FeaturedInfo;