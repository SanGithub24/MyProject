
import React from "react";
//import { useNavigate} from 'react-router-dom';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import axios from "axios";
import '../filesCSS/registration.css'

import {AiOutlineMail, AiOutlineUnlock} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';


const Registration=()=> {

  const initialValues ={
    name: "",
    email: "",
    password: "",
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(5).max(15).required("Name Required"),
    email: Yup.string().min(10).max(40).required("Email Required"),
    password: Yup.string().min(5).max(20).required("Password Required"),
  })

  const onSubmit = (values, { resetForm }) => {
    axios.post("http://localhost:3001/adreg", values)
      .then(res => {
        console.log(res);
        resetForm();
        //toast.success("Successfully registered!");
        alert("Successfully registered!");
        window.location.href = "/login";
      })
      .catch(err => {
        console.log(err.message);
        // If registration fails, display an error toast
        alert("Something went wrong");
      });
  };

 return (

    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
   
        <Form>

                <div className="main-boxreg">

                        <div className="regbg">

                            <div className="mainform">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            
                          
                            <div className="title" >
                              <h1>Sign Up</h1>
                            </div>

                            <br/>

                            <div className="rowereg">
                              <BsPerson color="white"  fontSize={20}></BsPerson>
                              <Field type="name" name="name" className="inputreg"/>
                              <label htmlFor="name">Name</label>
                            </div>
                            <div className="msg"><ErrorMessage name="name" component="span"/></div>

                            <br/>

                            <div className="rowereg">
                              <AiOutlineMail color="white"  fontSize={20}></AiOutlineMail>
                              <Field type="email" name="email" className="inputreg"/>
                              <label htmlFor="email">Email</label>
                            </div>
                            <div className="msg"><ErrorMessage name="email" component="span"/></div>

                            <br/>
                  
                            <div className="rowpreg">
                              <AiOutlineUnlock color="white"  fontSize={20}></AiOutlineUnlock>
                              <Field type="password" name="password" className="inputreg"/>
                              <label htmlFor="password">Password</label>
                            </div>
                            <div className="msg"><ErrorMessage name="password" component="span"/></div>
                          
                            <br/>
                            <br/>
                            <br/>
                        
                            <div className="rowbtn">
                              <div className="btnreg">
                              
                                  <button type="submit" className="btn-btnreg"> Register </button>
                              
                              </div>
                            </div>

                            <br/>

                            <div className="rowup">
                                
                                <div>Already have an account? --
                                    <a href="/login" className="signin">Sign In</a>
                                </div>

                            </div>

                        </div>
                    </div>
                  </div>
    
        </Form>
      </Formik>
    </div>       
 )
}

export default Registration;
