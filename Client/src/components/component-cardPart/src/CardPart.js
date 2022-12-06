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

  const canGoBack = currentIndex < dbData.length - 1

  const canSwipe = currentIndex >= 0

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
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
      <Waves/>
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