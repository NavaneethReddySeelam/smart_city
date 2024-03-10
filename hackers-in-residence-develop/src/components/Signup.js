import React from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Corrected import

const Signup = () => {

  const navigate = useNavigate(); // Corrected hook usage
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const role =data.get("role")
    if(name === "" || email === "" || password === ""|| role==="" ){
      alert("please provide all the details")
    }
    
    axios.post("http://localhost:8080/signup", { name, email, password })
      .then((res) => {// Corrected access to axios response data
        console.log(res)
        if (res.data.message === "User already exist") {
          alert("User already exist");
          navigate("/LogIn")
        } else {
          alert("User created successfully");
          navigate("/LogIn"); 
        }
      }).catch((error) => {
        console.error("Signup error:", error);
        // Handle error case
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="signup">
          <h2 id="mn">Signup</h2>
          <div className='inputs'>
            <input type="text" placeholder="Name" id="user" name='name'/>
            <input type="text" placeholder="Email" id="email" name='email'/>
            <input type="password" placeholder="password" id="password" name='password'/>
            <select id="mn" aria-label="role">
              <option selected="">select Role</option>
              <option value={1}>Admin</option>
              <option value={2}>user</option>
            </select>
            <a href="#" className="forgot">forgot password?</a>
            <input id="button" value="SignUp" type="submit" />
            <a href="#">If have an account? Login</a>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
