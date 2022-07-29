import { Avatar,IconButton } from "@mui/material";
import React, { useEffect, useState } from 'react';
import './Appbody.css';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
import { useParams } from "react-router-dom";
import db from "./Back";
import firebase from "firebase/compat/app";
import { useStateValue } from "./StateProvider";

function Chatbody() {
    const [seed, setseed] = useState("");
    const [{user},dispatch]=useStateValue();

    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000))
    }, [])
    const { roomID } = useParams();
    console.log(roomID);
    const [roomNane, setroomName] = useState("");
    const [input, setInput] = useState();
    const [message, setMessage] = useState([]);
    useEffect(() => {
        if (roomID) {
            db.collection("rooms").doc(roomID).onSnapshot(snapshot => {
                setroomName(snapshot.data().name);
            })
        }
        db.collection("rooms").doc(roomID).collection("message").orderBy("timestamp", "asc").onSnapshot(snapshot => {
            setMessage(snapshot.docs.map(doc => doc.data()))
        })

    }, [roomID])

    const sendMsg = (e) => {
        e.preventDefault();
        db.collection("rooms").doc(roomID).collection("message").add(
            {
                name:user.displayName,
                messages: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
        );
        setInput("");
    }
    return (
        <div className="chatbox">
            <div className="chat-header">
                <Avatar  src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat-header-info">
                    <h3>{roomNane}</h3>
                    <p>Last seen</p>
                </div>
                <div className="chat-header-right">
                    <IconButton>
                        <SearchIcon style={{ color: 'white' }} />
                    </IconButton>

                    <IconButton>
                        <AttachFileIcon style={{ color: 'white' }} />
                    </IconButton>

                    <IconButton>
                        < MoreVertIcon style={{ color: 'white' }} />
                    </IconButton>
                </div>

            </div>
            <div className="chat_msg">
                {
                    message.map(msg => (
                        <p className="chat_me chat_reciever">
                            <span className="chat_name">{msg.name}</span>
                            {msg.messages}
                            <span className="chat_time">
                                {
                                    new Date(msg.timestamp?.seconds*1000).toLocaleTimeString()
                                }
                            </span>
                        </p>

                    ))
                }


               

            </div>
            <div className="chat_footer">
                <IconButton>  <EmojiEmotionsIcon style={{ color: 'white' }} /></IconButton>
                <IconButton><AttachFileIcon style={{ color: 'white' }} /></IconButton>

                <form onSubmit={sendMsg}>
                    <input type='text' value={input} placeholder="Type your message" n
                        onChange={e => setInput(e.target.value)} />
                    <input type='submit' />
                </form>
                <IconButton> <MicIcon style={{ color: 'white' }} /></IconButton>

            </div>

        </div>
    )
}
export default Chatbody;