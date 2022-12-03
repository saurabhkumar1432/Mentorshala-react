import React from 'react'
import Displayimg from '../../../images/26324132-removebg-preview.png'
import './front.css'
const Front = () => {
    return (
        <div className='frontContainer'>
            <div className="image_container">
                <img src={Displayimg} className='banner' />
            </div>
            <div className="sidecontainer">
                <div className="template">
                    <h1>You will teach and in teach you will learn.</h1>
                    <p>You annot transit wisdom and insight to another person. The seed is already there. A good teacher touches the seed, allowing it to make up, to sprout , and to grow.</p>
                </div>
                <div className="btn_container">
                    <a href='register'><button type="submit" className='btn1'>Mentor</button></a>
                    <a href='register'><button type='submit' className='btn1'>Mentee</button></a>
                </div>
                
            </div>
        </div>
    )
}
export default Front;