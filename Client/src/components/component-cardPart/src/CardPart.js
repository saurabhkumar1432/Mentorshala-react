// import { useState } from 'react'
import React, { useState, useMemo, useRef, useEffect } from 'react'

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

// const dbData=[]
let likedPeople=[]
let dislikedPeople=[]
const CardPart=()=>{
  const [dbData,setdbData]=useState([])
  useEffect(()=>{
    http.get('/getUsers')
    .then(res=>{
      console.log(res);
      setdbData(res.data)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  // console.log(indexCurrently);
  // console.log(likedPeople);
  // console.log(dislikedPeople);
    const [currentIndex, setCurrentIndex] = useState(dbData.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)
  // console.log(dbData[currentIndex]);
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

  const canGoBack = currentIndex < dbData.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
    // console.log(dbData[currentIndex]);
    if(direction==='right'){
      document.getElementsByClassName('cardPart')[0].classList.add('bgGreen')
    }
    else{
        document.getElementsByClassName('cardPart')[0].classList.add('bgRed')
    }
    console.log(dbData[currentIndexRef.current+1]);
    if( direction==='right'){
      likedPeople.push(dbData[currentIndexRef.current+1])
    }
    else{
      dislikedPeople.push(dbData[currentIndexRef.current+1])
    }
    
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
    document.getElementsByClassName('cardPart')[0].classList.remove('bgGreen')
    document.getElementsByClassName('cardPart')[0].classList.remove('bgRed')
    // console.log(dbData[currentIndexRef.current+1]);
  }

  const swipe =  async(dir) => {
    if (canSwipe && currentIndex < dbData.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
    // if(dir==='right'){
    //   document.getElementsByClassName('cardPart')[0].classList.add('bgGreen')
    // }
    // else{
    //     document.getElementsByClassName('cardPart')[0].classList.add('bgRed')
    // }
  }

  // increase current index and show card
  // const goBack = async () => {
  //   if (!canGoBack) return
  //   const newIndex = currentIndex + 1
  //   updateCurrentIndex(newIndex)
  //   await childRefs[newIndex].current.restoreCard()
  // }

  return (
    <div className="cardPart col-6">
      <svg id='cardPart-wave0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,96L34.3,85.3C68.6,75,137,53,206,58.7C274.3,64,343,96,411,138.7C480,181,549,235,617,250.7C685.7,267,754,245,823,213.3C891.4,181,960,139,1029,149.3C1097.1,160,1166,224,1234,250.7C1302.9,277,1371,267,1406,261.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
  <defs>
        <linearGradient id="MyGradient0" x2={"0%"} y2={ "100%"}>
          <stop offset="0%" stop-color="#043190" />
          <stop offset="100%" stop-color="#031f5b" />
        </linearGradient>
      </defs>
  </svg>

      <svg id='cardPart-wave1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,32L40,80C80,128,160,224,240,250.7C320,277,400,235,480,202.7C560,171,640,149,720,117.3C800,85,880,43,960,26.7C1040,11,1120,21,1200,53.3C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      <defs>
        <linearGradient id="MyGradient1" x2={"0%"} y2={ "100%"}>
          <stop offset="0%" stop-color="#3f66d2" />
          <stop offset="100%" stop-color="#172d68" />
        </linearGradient>
      </defs>
</svg>
      <svg id='cardPart-wave2'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ffff" fill-opacity="1" d="M0,192L48,170.7C96,149,192,107,288,74.7C384,43,480,21,576,58.7C672,96,768,192,864,218.7C960,245,1056,203,1152,202.7C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  <defs>
        <linearGradient id="MyGradient2" x2={"0%"} y2={ "100%"}>
          <stop offset="0%" stop-color="#008E97" />
          <stop offset="100%" stop-color="#016a71" />
        </linearGradient>
      </defs>
</svg>
      <svg id='cardPart-wave3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#629de9" fill-opacity="1" d="M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,202.7C672,160,768,96,864,90.7C960,85,1056,139,1152,170.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>

</svg>
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
      <div className='card-buttons'>
        <button id='rejected' style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}><ThumbDownOffAltIcon/></button>
        {/* <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}><UndoIcon/></button> */}
        <button id='accepted' style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}><ThumbUpOffAltIcon/></button>
      </div>
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