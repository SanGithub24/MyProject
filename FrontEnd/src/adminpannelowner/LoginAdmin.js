import React, { useState } from "react";
import {Link} from 'react-router-dom';


import './login.css'
import axios from "axios";

import {AiOutlineMail, AiOutlineUnlock} from 'react-icons/ai';

const LoginAdmin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const data = {email: email, password: password};
    axios.post("http://localhost:3001/adreg/adlogin", data).then((response) => {
      console.log(response.data);
    })
  }

  return (
    
    <div>
        <div className="login">
              
                <div className="container">

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                      
                  <div className="main-box">
                    <div className="row">
                      <div className="title">
                        
                      <br/>

                        <h1>Sign In</h1>
                      </div>
                    </div>

                        <br/>
                        <br/>

                      <div className="rowe">
                          <AiOutlineMail 
                            color="white"  
                            fontSize={20}>
                          </AiOutlineMail>
                          <input 
                            type="email" 
                            name="email" 
                            id="email"
                            className="input" 
                            onChange={(event) =>{setEmail(event.target.value)
                          }}/>
                          <label htmlFor="email">Email</label>
                      </div>

                          <br/>

                      <div className="rowp">
                          <AiOutlineUnlock 
                              color="white"  
                          fontSize={20}>
                          </AiOutlineUnlock>
                          <input type="password" 
                            name="password" 
                            className="input" 
                            onChange={(event) =>{setPassword(event.target.value)
                          }}/>
                            <label htmlFor="password">Password</label>
                      </div>

                       
                      <br/>
                          <br/>

                      <div className="rowforget">
                        <a href="/forgetpwd" className="forget">Forget Password</a>
                      </div>
                      
                        <br/><br/>

                      <div className="row">
                            <div className="btn">
                            
                              <button type="submit" name="submit" className="btn-btn" onClick={login}>
                               Login </button>
                            
                            </div>
                      </div>

                            <br/>

                      <div className="rowsign">
                            <div>Don't have an account? --
                              <Link to="/registration" className="sign">Sign up</Link>
                            </div>

                      </div>

                        <br/>
                        
                  </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                </div>
        </div>
      </div>
    
  )
}

export default LoginAdmin;
