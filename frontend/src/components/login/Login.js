import React from "react";
import './Login.css'
import {Link} from 'react-router-dom'
import { useState,useContext } from 'react'
import {UserContext} from "../../UserContext"



const Login = () => {

  const {user,setUser}=useContext(UserContext)
  const [details,setDetails]=useState({
  email:'',
  password:'',

})

const submitHandler= async (e)=>{
  console.log('click')
  e.preventDefault();
  // setErrors(errors);

try{
  const res = await fetch('http://localhost:5000/signin', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({email:details.email,password:details.password}),
                headers: { 'Content-Type': 'application/json' }
            });

            const data= await res.json()
            console.log(details.email)
            console.log(data)
          if (data.email) {
              setUser(data.email)
          }
        }  catch(error){
          console.log(error)
        }
     }

  return (
    <div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active"> Sign In </h2>

          <Link to="/signup" >
            <h2 className="inactive underlineHover">Sign Up </h2>
          </Link>

          <form onSubmit={e=>submitHandler(e)}>
          <input
          type="email"
          className="form-control"
          placeholder="email"
          id="username"
          name="username"
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
          id="password"
          name="password"
          onChange={(e)=>{
            setDetails(prevState => ({
                ...prevState,
                password: e.target.value
            }));
          }}
        />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
