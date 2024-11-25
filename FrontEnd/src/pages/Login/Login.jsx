import React from "react";

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import axios from "axios";
import './Login.css';

import {AiOutlineMail, AiOutlineUnlock} from 'react-icons/ai';
import FirstBG from "../../assets/images/BGImages/BackgroundLogin.jpg";
import TopBG from "../../assets/images/BGImages/BackgroundLogin.jpg";


const Login = () => {

  const initialValues ={
    email: "",
    password: "",
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email Required"),
    password: Yup.string().required("Password Required"),
  })

  const onSubmit = (values, { resetForm }) => {
    axios.post("http://localhost:3001/register/login", values)
      .then(res => {
        console.log(res);
        resetForm();
        const { success, message } = res.data;
        if (success) {
          // User exists in the database, redirect to product display page
          window.location.href = "/account";
          alert("Successfully Logged In!");
        } else {
          // User does not exist or invalid credentials, display error message
          alert(message || "Invalid Username or Password");
        }
      })
      .catch(err => {
        console.log(err.message);
        // Display a generic error message
        alert("Something went wrong");
      });
  };
  
  
  return (
    
    <div>
        <div className="login">
              
          <img src={FirstBG} alt='' className='loginBG'/>
              
            <div>

              <img src={TopBG} alt='' className="logbg" />

                <div className="container">

                      <br/>
                      <br/>
                      
                  <div className="main-box">

                  <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
   
   <Form >
                    <div className="row">
                      <div className="title">
                      

                        <br/>
                        <br/>
                      <br/>

                        <h1>Sign In</h1>
                      </div>
                    </div>

                        <br/>
                        <br/>

                      <div className="rowe">
                          <AiOutlineMail color="white"  fontSize={20}></AiOutlineMail>
                          <Field 
                          type="email" 
                          name="email" 
                          className="input" />
                          <label htmlFor="email">Email</label>
                      </div>

                      <div className="msg"><ErrorMessage name="email" component="span"/></div>

                          <br/>

                      <div className="rowp">
                          <AiOutlineUnlock color="white"  fontSize={20}></AiOutlineUnlock>
                          <Field 
                          type="password" 
                          name="password" 
                          className="input" />
                          <label htmlFor="password">Password</label>
                      </div>

                      <div className="msg"><ErrorMessage name="password" component="span"/></div>

                      <br/>
                      <br/>

                      <div className="row">
                            <div className="btn">
                            
                              <button type="submit" name="submit" className="btn-btn">
                               Login </button>
                            
                            </div>
                      </div>

                            <br/>

                      <div className="rowsign">
                            <div>Don't have an account? --
                              <a href="/register" className="sign">Sign up</a>
                            </div>

                      </div>

                        <br/>
        </Form>
      </Formik>
                  </div>
                  
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                </div>
        </div>
      </div>
    </div>
    
    
  )
}


export default Login;
