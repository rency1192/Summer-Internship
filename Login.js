import React from "react";
import WhatsApp  from './WhatsApp.jpg';
import './login.css';
import { auth, provider } from "./Back";
import { useStateValue } from "./StateProvider";
function Login() {
 const [{},dispatch]=useStateValue();
  const SignIn=()=>
    {
      auth.signInWithPopup(provider).then(result=>
        {
          dispatch({
            type:"SET-User",
            user:result.user

          })
        }).catch(error=>alert(error))
    }
  return (
    


    <div className="login-out">
       <div className="login">
        <img src={WhatsApp} height='100'/>
        <h1>Sign into Whatsapp</h1>
        <button onClick={SignIn}>Login</button>

       </div>
    </div>


  );
}
export default Login;