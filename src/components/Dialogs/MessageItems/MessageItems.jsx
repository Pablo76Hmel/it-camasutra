
import React from 'react';
import s from './MessageItems.module.css';
import {NavLink} from "react-router-dom"




const MessageItems=(props)=> {
    
    return (
        <div className={s.message}>{props.message}</div>
)
}


export default MessageItems 
