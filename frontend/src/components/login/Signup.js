import React from "react";
import './Login.css'
import {Link} from "react-router-dom"
import { useState,useContext } from 'react'
import {UserContext} from "../../UserContext"


const Signup = () => {

  const {user,setUser}=useContext(UserContext)
  const [details,setDetails]=useState({
    name:'',
    email:'',
    password:'',
  
  })
  
  const [errors,setErrors]=useState({
    usernameError:'',
    emailError:'',
    passwordError:''
  })
  
  const submitHandler= async (e)=>{
    console.log('click')
    e.preventDefault();
    setErrors(errors);
  
  try{
    const res = await fetch('http://localhost:5000/sign_up', {
                  method: 'POST',
                  credentials: 'include',
                  body: JSON.stringify({name:details.name,email:details.email,password:details.password}),
                  headers: { 'Content-Type': 'application/json' }
              });
              const data= await res.json()
              console.log(data)
     
          if (data.email) {
              setUser(details.email)
              console.log(user)
          }
        }  catch(error){
          console.log(error)
        }
  }

  return (
    <div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <Link to="/login">
            <h2 className="inactive underlineHover">Sign In </h2>
          </Link>
          <h2 className="active"> Sign Up </h2>

          <form onSubmit={e=>submitHandler(e)}>
          <input
          type="text"
          className="form-control"
          placeholder="Username"
          id="username"
          name="name"
          value={details.name}
          onChange={(e)=>{
            setDetails(prevState => ({
                ...prevState,
                name: e.target.value
            }));
          }}
        />
           <input
          type="email"
          className="form-control"
          placeholder="Email ID"
          id="email"
          name="email"
          value={details.email}
          onChange={(e)=>{
            setDetails(prevState => ({
                ...prevState,
                email: e.target.value
            }));
          }}
        />
          <input
          type="password"
          className="form-control"
          placeholder=" Password *"
          id="password1"
          name="password1"
          value={details.password}
          onChange={(e)=>{
            setDetails(prevState => ({
                ...prevState,
                password: e.target.value
            }));
          }}
        />
            {/* <input
              type="password"
              id="confirm_password"
              className="fadeIn third"
              name="signup"
              placeholder="confirm password"
            /> */}
            <input type="submit" className="fadeIn fourth" value="Sign Up" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
