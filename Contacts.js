import React, { useEffect, useState } from 'react';
import './Appbody.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, IconButton } from '@mui/material';
import Chats from './Chats';
import db from './Back.js'
import { useStateValue } from "./StateProvider";
function Contacts() {
  const[room,setRoom]=useState([]);
  const [{user},dispatch]=useStateValue();
  useEffect(()=>
  {
        db.collection('rooms').onSnapshot(snapshot=>
          {
            setRoom(snapshot.docs.map(doc=>({
              id:doc.id,
              data:doc.data()
            })))
          })
  },[])
  console.log(room);

   return (
     <div className='sidebar'>
          <div className='bar-header'>
          <Avatar src={user.photoURL}/>
          <div className='bar-header-right'>
            
            <IconButton>  <DonutLargeIcon   style={{color:'white'}}/> </IconButton>
            <IconButton>  <ChatIcon   style={{color:'white'}}/> </IconButton>
            <IconButton>  <MoreVertIcon  style={{color:'white'}} /> </IconButton>
            
          
           </div>
          </div>
         
          <div className='search'>
            <div className='search-content'>
            <SearchIcon /> 
            <input type='text' placeholder='Search here' />
            </div>
          </div>

         <div className='chats'> 
          <Chats addnewchat/>
          {
            room.map(rooms=>
              {
                return  <Chats key={rooms.id} id={rooms.id} name={rooms.data.name}/>
              })
          }
         
         
         </div>
     </div>

    );
  }
  
export default Contacts;
  
