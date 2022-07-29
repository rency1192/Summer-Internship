import React from 'react';
import './App.css';
import Chatbody from './Chatbody';
import Contacts from './Contacts';

function Home() {
  return (

  
      <div className="App">
        <div className="App_body">
        <Contacts/>
        <Chatbody />
         
        </div>
      </div>
  
  );
}
export default Home;
//<Route exact path="/" element={<Login />}></Route>