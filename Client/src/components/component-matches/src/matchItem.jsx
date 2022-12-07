import React from 'react'

const MatchItem = (props) => {
  return (
    <div>
      <div id='contactContainer' className='d-flex'>
            <div>
                <img id="contactImage" src={props.contact.profilePic}></img>
            </div>
            <div>
                <div id="contactName" class="row"> {props.contact.firstName} {props.contact.lastName}</div>
                <div id="contactLastmessage" class="row">You have been matched😊</div>
            </div>
        </div>
    </div>
  )
}

export default MatchItem
