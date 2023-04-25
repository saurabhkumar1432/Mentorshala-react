// import { useState } from 'react'
import React, { useState, useMemo, useRef, useEffect } from "react";
import Waves from "./Waves.jsx";
import "./CardPart.css";
import Card from "./Card";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
// import Carddata from '../data/card-data'
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import data from "../../component-main-page/data/data";
import TinderCard from "react-tinder-card";
import UndoIcon from "@mui/icons-material/Undo";
import { ReactDOM } from "react";
import http from "../../../http-common.js";
// import httpPost from '../../../http-posting.js'
import axios from "axios";
let likedPeople = [];
let dislikedPeople = [];
const CardPart = (props) => {
  const dbData=props.dbData
  const userDetail = props.userData;
  
  const [currentIndex, setCurrentIndex] = useState(dbData.length - 1);
  // console.log(dbData.length - 1);
  // console.log(currentIndex);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);
  const childRefs = useMemo(
    () =>
      Array(dbData.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };
  const updateLikedProfile = async (profile) => {
    // console.log(profile);
    // const formData=new FormData()
    // formData.append('profile',profile)
    await axios
      .post(
        `https://mentorshala-backend.onrender.com/api/v1/mentorshala/post/liked-profile/${profile.username}`,
        userDetail
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const never_again = async (profile) => {
    // console.log(profile.username);
    await axios
      .post(
        `https://mentorshala-backend.onrender.com/api/v1/mentorshala/post/dont_show/${userDetail.username}`,
        { item: profile.username }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const canGoBack = currentIndex < dbData.length - 1;
  // console.log(currentIndex);
  const canSwipe = currentIndex >= 0;

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    if (direction === "right") {
      document.getElementsByClassName("cardPart")[0].classList.add("bgGreen");
      updateLikedProfile(dbData[currentIndexRef.current + 1]);
    } else {
      document.getElementsByClassName("cardPart")[0].classList.add("bgRed");
      dislikedPeople.push(dbData[currentIndexRef.current + 1]);
    }
    // console.log(dbData[currentIndexRef.current+1]);
    // console.log(likedPeople);
    never_again(dbData[currentIndexRef.current + 1]);
  };

  const outOfFrame = (name, idx) => {
    // console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    document.getElementsByClassName("cardPart")[0].classList.remove("bgGreen");
    document.getElementsByClassName("cardPart")[0].classList.remove("bgRed");
  };

  const swipe = async (dir) => {
    console.log(canSwipe);
    if (canSwipe && currentIndex < dbData.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };
  const [reportFormActive, setReportFormActive] = useState(false);
  const reportHandler = async () => {
    setReportFormActive(false);
    const obj = {
      username: document.getElementById("reportedUsername").value,
      description: document.getElementById("reasonToReport").value,
    };
    await axios
      .post(
        "https://mentorshala-backend.onrender.com/api/v1/mentorshala/postReport",
        obj
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };
  return (
    <div className="cardPart col-6">
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <button
        onClick={() => {
          setReportFormActive(true);
        }}
        className="reportBtn"
      >
        Report
      </button>
      <div className={reportFormActive ? "reportForm" : "deactivateReportForm"}>
        <div className="reportForm-container">
          <div className="form-report">
            <input
              id="reportedUsername"
              required
              type="text"
              placeholder="Enter Username"
            ></input>
            <input
              id="reasonToReport"
              required
              type="text"
              placeholder="Description"
            ></input>
            <div className="report-btn-in-form">
              <button onClick={reportHandler}>Report</button>
              <button
                onClick={() => {
                  setReportFormActive(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        {dbData.map((character, index) => {
          return (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name, index)}
              onCardLeftScreen={() => outOfFrame(character.name, index)}
            >
              {/* {
                  console.log(character)
                } */}
              <Card character={character} />
            </TinderCard>
          );
        })}
      </div>
      <div className='card-buttons'>
        <button id='rejected' style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}><ThumbDownOffAltIcon/></button>
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
  );
};

export default CardPart;
