import React from "react";
//import { useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai';
import {Link} from 'react-router-dom';

import '../filesCSS/loginadmin.css'


const Login = () => {

  const initialValues = {
    username: "",
    password: "",
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username Required"),
    password: Yup.string().required("Password Required"),
  })

  const onSubmit = (values, { resetForm }) => {
    const { username, password } = values;
    if (username === 'admin' && password === 'admin123') {
      resetForm();
      window.location.href = "/home";
      alert("Successfully Logged In!");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div>
          <div className="container">
            <br />
            <br />
            <div className="main-boxadmin">

              <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>

                  <div className="rowadmin">
                    <div className="title">
                      <br />
                      <br />
                  <br />
                  
                      <h1>Admin Login</h1>
                    </div>
                  </div>

                  <br />
                  <br />

                  <div className="username">
                    <AiOutlineMail color="white" fontSize={20}></AiOutlineMail>
                    <Field 
                    type="username" 
                    name="username" 
                    className="input" />
                    <label htmlFor="username">Username</label>
                  </div>

                  <div className="msg"><ErrorMessage name="username" component="span" /></div>
                  <br />

                  <div className="rowp">
                    <AiOutlineUnlock color="white" fontSize={20}></AiOutlineUnlock>
                    <Field 
                    type="password" 
                    name="password" 
                    className="input" />
                    <label htmlFor="password">Password</label>
                  </div>

                  <div className="msg"><ErrorMessage name="password" component="span" /></div>
                  <br />
                  <br />

                  <div className="row">
                    <div className="btn">
                      <button type="submit" name="submit" className="btn-btn">Login</button>
                    </div>
                  </div>
                  <br />
                  <div className="rowsign">
                    <Link to="/login" className="sign">Sign In</Link>
                  </div>
                  
                </Form>
              </Formik>
            </div>
            <br />
            <br />
            <br />
         
      </div>
    </div>
  )
}

export default Login;
