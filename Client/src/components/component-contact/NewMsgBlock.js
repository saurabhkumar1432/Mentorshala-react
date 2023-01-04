import React from 'react'
import '../component-contact/NewMsgBlock.css'
export default function NewMsgBlock(props,{innerRef}){
    if(props.newMsg!==''){
        return (
            <div ref={innerRef} id='toBeSentMessage'>{props.newMsg}</div>
        )
    }
}