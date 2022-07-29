import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import './Appbody.css';
import db from './Back.js';
import {
   
    Link
  } from "react-router-dom";
function Chats({ id, name, addnewchat }) {
    const [seed, setseed] = useState("");

    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000))
    }, [])
    return (
        !addnewchat ? (
            <Link to={`/rooms/${id}`}>
        <div className='sidebar-chat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className='chat_info'>
                <h2>{name}</h2>
                <p style={{ color: 'white' }}>Last Message</p>
            </div>

        </div>
        </Link>
        ) : (
            <div className='sidebar-chat' onClick={() => {
                const resp = prompt("Enter your name");
                if (resp) {
                   db.collection("rooms").add({
                    name:resp
                   })
                }
            }}>
                <h2>Add New Chat</h2>
            </div>
        )
    )
}
export default Chats;