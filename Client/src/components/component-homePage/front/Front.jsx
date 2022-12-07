import React from 'react'
import './front.css'
import Grid from '@mui/material/Grid';
import ChatSvg from '../../../images/ChatSvg.svg'
import CardSwipeSVG from '../../../images/CardSwipeSVG.svg'
import CommunitySVG from '../../../images/CommunitySVG.svg'
const Front = () => {
    return (
        <section id="ps5">
        <div className='frontContainer'>
            <h1>Services Provided By MentorShala</h1>
            <div className="frontContainer-div">
                <div className="frontContainer-div-grid">
                    <img src={ChatSvg}></img>
                    <div className="gridContent">
                        <div>
                            <h2>Chat Section</h2>
                            <h4>MentorShala provides chat facility to users to  message or chat with mentors or mentees. If you are matched with mentors or mentees by card swipe than, you can chat or message them with the chat facility.
                            You can send photos, videos, gif and stickers to the receiver to interact more with them.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="frontContainer-div">
                <div className="frontContainer-div-grid">
                    <div className="gridContent">
                        <div>
                            <h2>Card Swiping</h2>
                            <h4>
                                Choose your mentor or mentee by swiping their card.If you like the person, you can swipe right, otherwise swipe left.That card will conatin person's details like name, state, country, education and experience. This details will help you in choosing your mentor or mentee. If any peroson card offended you, then you can report that person.
                            </h4>
                        </div>
                    </div>
                    <img src={CardSwipeSVG}></img>
                </div>
            </div>
            <div className="frontContainer-div">
                <div className="frontContainer-div-grid">
                    <img src={CommunitySVG}></img>
                    <div className="gridContent">
                        <div>
                            <h2>Community</h2>
                            <h4>MentorShala community service provide you facility to post your ideas and opinions.You can post photos, videos and can start an event.You can share your ideas or acheivments and can take other's feedback on your post. This will expand your connections with other mentors and mentees.This will help you in your career.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
export default Front;