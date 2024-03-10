import React from 'react'
import axios from 'axios'
// import {Navigate} from 'react-router-dom'

export const login = () => {

  const handlesubmit=(e)=>{
    e.preventDefault()
    const data = new FormData(e.currentTarget) 
    const email = data.get("email")
    const password = data.get("password")
    axios.post("http://localhost:8080/login",{
      email,password
    }).then((res)=>{
      if(res.data.message === "Incorrect Email"){
        alert("Incorrect Email")
      }
      else if(res.data.message === "Incorrect Password"){
        alert("Incorrect Password")
      }
      else{
        alert("user logged in succesfully")
        // navigate("/")
      }
    })

  }
  return (
    <>
   <form onSubmit={(e)=>{handlesubmit(e)}}>
  <div className="login">
    <div className='inputs-'>

    <h2 id="mn">Login</h2>
    <input type="text" placeholder="email" id="user-" name='email'/>
    <input type="password" placeholder="password" id="password-" name='password' />
    <div className="remember">
      <input type="checkbox" id="check" defaultValue="remember me" />
      <h4>Remember me</h4>
    </div>
    <a href="#" id="forgot">
      forgot password
    </a>
    <a href="#">
      <input id="button" value="Login" type="submit"/>
    </a>
    <a href="Signup.js">If don't have an account? Signup</a>
    </div>
  </div>
  </form>
</>
 )
}
export default login;