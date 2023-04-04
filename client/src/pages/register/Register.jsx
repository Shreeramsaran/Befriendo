
import "./register.css"
import axios from "axios";
import { useRef} from "react";
import {useHistory} from "react-router";
export default function Register() {
  const username=useRef();
  const email=useRef();
  const password=useRef();
  const passwordAgain=useRef();
  const history=useHistory();
  const handleclick=async(e)=>{
    e.preventDefault();
    if(passwordAgain.current.value!==password.current.value){
      passwordAgain.current.setCustomValidity("Passwords don't match !")
    }
    else{
      const user={
        username:username.current.value,
        email:email.current.value,
        password:password.current.value,
      };
      try{
        await axios.post("/auth/register",user);
        history.push("/login");
      }catch(err)
      {
        console.log(err)
      }
      
    }

  }


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
        <h3 className="loginLogo">Befriendo</h3>
         <span className="loginDesc">
        Connects with friends and the world around you on Befriendo.
         </span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleclick}>
            <input placeholder="Username"  required ref={username}  className="loginInput" />
            <input placeholder="Email" ref={email} required type="email" className="loginInput" />
                
                <input placeholder="Password" required ref={password}   type="password" className="loginInput"  minLength="6"/>
                <input placeholder="Password Again" required  ref={passwordAgain} type="password" className="loginInput" />
                <button className="loginButton">Sign up</button>
                
                <button className="loginRegisterButton">Log into Account</button>
            </form>
        </div>
      </div>
    </div>
  )
}


