import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { AiOutlineMail, AiOutlineUnlock } from "react-icons/ai";

import "../filesCSS/login.css";

const Login = () => {
  const history = useHistory();

  const initialValues = {
    email: "",
    password: ""
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email Required"),
    password: Yup.string().required("Password Required")
  });


const onSubmit = (values, { resetForm }) => {
  axios
    .post("http://localhost:3001/adreg/adlogin", values)
    .then((res) => {
      console.log(res); // Log the entire response object
      resetForm();
      const { success, message } = res.data;
      console.log("Success:", success); // Log the value of 'success'
      console.log("Message:", message); // Log the value of 'message'
      if (success === true) {
        // User exists in the database, navigate to AccountEmp component
        history.push("/accountemp");
        alert("Successfully Logged In!");
      } else {
        // User does not exist or invalid credentials, display error message
        alert(message || "Invalid Username or Password");
      }
    })
    .catch((err) => {
      console.log(err.message);
      // Display a generic error message
      alert("Something went wrong");
    });
};


  return (
    <div>
      <div className="login">
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="main-box">
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              <Form>
                <div className="row">
                  <div className="title">
                    <br />
                    <h1>Sign In</h1>
                  </div>
                </div>
                <br />
                <br />
                <div className="rowe">
                  <AiOutlineMail color="white" fontSize={20} />
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="input"
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="msg">
                  <ErrorMessage name="email" component="span" />
                </div>
                <br />
                <div className="rowp">
                  <AiOutlineUnlock color="white" fontSize={20} />
                  <Field
                    type="password"
                    name="password"
                    className="input"
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="msg">
                  <ErrorMessage name="password" component="span" />
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="btn">
                    <button type="submit" name="submit" className="btn-btn">
                      Login
                    </button>
                  </div>
                </div>
                <br />
                <div className="rowsign">
                  <div>
                    Don't have an account? --
                    <Link to="/registration" className="sign">
                      Sign up
                    </Link>
                  </div>
                </div>
                <br />
                <br />
                <div className="rowsign">
                  <Link to="/admin" className="sign">
                    Admin Only
                  </Link>
                </div>
              </Form>
            </Formik>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Login;
