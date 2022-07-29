
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Chatbody from './Chatbody';
import Contacts from './Contacts';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useState } from 'react';
function App() {
 // const [user,setUser]=useState(null);
  const [{user},dispatch]=useStateValue();
  console.log(user)
  return (
    

    <Router>
      {!user?(<Login/>):(
      <div className="App">
        <div className="App_body">
          <Contacts/>
          <Routes>
            <Route exact path="/" element={<Chatbody />}></Route>
            <Route path="/rooms/:roomID" element={<Chatbody />}></Route>
          </Routes>
        </div>
      </div>)
}
    </Router>
  );
}
export default App;
