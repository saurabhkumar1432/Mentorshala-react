// import { useState } from 'react'
import React, { useState, useMemo, useRef, useEffect } from 'react'
import Waves from './Waves.jsx';
import './CardPart.css'
import Card from './Card'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
// import Carddata from '../data/card-data'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import data from '../../component-main-page/data/data'
import TinderCard from 'react-tinder-card'
import UndoIcon from '@mui/icons-material/Undo';
import { ReactDOM } from 'react';
import http from "../../../http-common.js"
// import httpPost from '../../../http-posting.js'
import axios from 'axios'
let likedPeople=[]
let dislikedPeople=[]
const CardPart=()=>{
  const [dbData,setdbData]=useState([])
  const userDetail=
  {
    "firstName": "Abhay",
    "lastName": "Pratap",
    "role":"Mentor",
    "profilePic": "https://i.pinimg.com/originals/36/fa/7b/36fa7b46c58c94ab0e5251ccd768d669.jpg",
    "banner": "https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "from": "Delhi",
    "country": "India",
    "college": "IIIT Delhi",
    "specialization": "Web Development",
    "description": "Avid book reader, always ready to learn new things.",
    "experience": [
      "Worked as front-end developer",
      "Working in IBM design department."
    ],
    "Linkedin": "https://www.linkedin.com/in/abhay-pratap-singh-878457203/",
    "Email": "abhaypratap.s20@iiits.in",
    "Password": "123",
    "report": {
      "$numberLong": "0"
    },
    "username":"abhay258",
    // "dont_show_again": [
    //   "himanshuk789"
    // ]
  }
  useEffect(()=>{
    http.get(`/get/${userDetail.role}/details`)
    .then(res=>{
      const fetchedData=res.data;
      // console.log(res);
      const never_to_show=userDetail.dont_show_again
      if(never_to_show!=undefined){
        // console.log(never_to_show);
        // console.log(fetchedData);
        const show_data=fetchedData.filter((element) => !never_to_show.includes(element.username  ));
        console.log(show_data);
        setdbData(show_data)
      }
      else{
        setdbData(fetchedData)
      }
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
    const [currentIndex, setCurrentIndex] = useState(dbData.length - 1)
  const [lastDirection, setLastDirection] = useState()
  const currentIndexRef = useRef(currentIndex)
  const childRefs = useMemo(
    () =>
      Array(dbData.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }
  const updateLikedProfile=async(profile)=>{
    // console.log(profile);
    // const formData=new FormData()
    // formData.append('profile',profile)
      await axios.post(`http://localhost:5000/api/v1/mentorshala/post/liked-profile/${profile.username}`,userDetail)
      .then(res=>{
        console.log(res);
      })
      .catch(err=>{
        console.log(err);
      })
  }
  const never_again=async(profile)=>{
    // console.log(profile.username);
    await axios.post(`http://localhost:5000/api/v1/mentorshala/post/dont_show/${userDetail.username}`,{"item":profile.username})
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })
  }
  const canGoBack = currentIndex < dbData.length - 1

  const canSwipe = currentIndex >= 0

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
    if(direction==='right'){
      document.getElementsByClassName('cardPart')[0].classList.add('bgGreen')
      updateLikedProfile(dbData[currentIndexRef.current+1])
    }
    else{
        document.getElementsByClassName('cardPart')[0].classList.add('bgRed')
        dislikedPeople.push(dbData[currentIndexRef.current+1])
    }
    // console.log(dbData[currentIndexRef.current+1]);
    // console.log(likedPeople);
    never_again(dbData[currentIndexRef.current+1])
  }

  const outOfFrame = (name, idx) => {
    // console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    document.getElementsByClassName('cardPart')[0].classList.remove('bgGreen')
    document.getElementsByClassName('cardPart')[0].classList.remove('bgRed')
  }

  const swipe =  async(dir) => {
    if (canSwipe && currentIndex < dbData.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <div className="cardPart col-6">
            <link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      />
      
        <div className='card-container'>
        {dbData.map((character, index) => {
            return (
              <TinderCard
                  ref={childRefs[index]}
                  className='swipe'
                  key={character.name}
                  onSwipe={(dir) => swiped(dir, character.name, index)}
                  onCardLeftScreen={() => outOfFrame(character.name, index)}
              >
                {/* {
                  console.log(character)
                } */}
              <Card character={character}/>
              </TinderCard>
            )
        })}
        </div>
      {/* <div className='card-buttons'>
        <button id='rejected' style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}><ThumbDownOffAltIcon/></button>
        <button id='accepted' style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}><ThumbUpOffAltIcon/></button>
      </div> */}
      {/* {lastDirection ? (
        <h2 key={lastDirection} className='infoText'>
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className='infoText'>
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )} */}
      
    </div>
  )
}

export default CardPart