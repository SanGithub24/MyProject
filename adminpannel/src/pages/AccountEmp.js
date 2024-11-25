import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../filesCSS/account.css';

const AccountEmp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [initialValues, setInitialValues] = useState({
    empfullname: '',
    empid: '',
    bloodtype: '',
  });

  const validationSchema = Yup.object({
    empfullname: Yup.string().required('Full Name is required'),
    empid: Yup.string().required('Employee ID is required'),
    bloodtype: Yup.string().required('Blood type is required'),
  });

  useEffect(() => {
    // Fetch initial data here and set the initialValues state
    const fetchInitialData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/emp');
        const { empfullname, empid, bloodtype } = response.data;
        setInitialValues({ empfullname, empid, bloodtype });
      } catch (error) {
        console.error('Failed to fetch initial data:', error);
      }
    };

    fetchInitialData();
  }, []);

  const onSubmit = async (values, { resetForm }) => {
    try {
      const formData = new FormData();
      if (selectedFile) {
        formData.append('empimg', selectedFile);
      }
      formData.append('empfullname', values.empfullname);
      formData.append('empid', values.empid);
      formData.append('bloodtype', values.bloodtype);

      await axios.post('http://localhost:3001/emp', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Form data sent successfully');
      resetForm();
      window.alert('Data Saved Successfully'); // Display success alert
    } catch (error) {
      console.error('Failed to send form data:', error);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      <Container>
        <div className="heading">
          <h1>Welcome to HappyHours</h1>
        </div>

        <div className="adddetailstitle">Personal Details</div>
        <section>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form
              className="user-details"
              style={{
                margin: 'auto',
                padding: '40px',
                maxWidth: '600px',
                maxHeight: '1000px',
                alignContent: 'center',
              }}
            >
              <div>
                <label htmlFor="empimg" className="emplabel">
                  Upload Image
                </label>
                <input type="file" id="empimg" name="empimg" placeholder="Choose Image" onChange={handleFileChange} />
                <ErrorMessage name="empimg" component="div" className="error-message" />

                <div className="form-group">
                  <label htmlFor="empfullname" className="emplabel">
                    Full Name
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="empfullname"
                    name="empfullname"
                    placeholder="Enter full name"
                  />
                  <ErrorMessage name="empfullname" component="div" className="error" />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label htmlFor="empid" className="emplabel">
                    Employee ID
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="empid"
                    name="empid"
                    placeholder="Enter employee ID"
                  />
                  <ErrorMessage name="empid" component="div" className="error" />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label htmlFor="bloodtype" className="emplabel">
                    Blood Type
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="bloodtype"
                    name="bloodtype"
                    placeholder="Enter blood type"
                  />
                  <ErrorMessage name="bloodtype" component="div" className="error" />
                </div>
              </div>

              <section>
                <div>
                  <div className="text-right">
                    <button type="submit" id="submit" name="submit" className="btnperson">
                      Save
                    </button>
                    <button type="button" id="update" name="update" className="btnperson">
                      Edit
                    </button>
                  </div>
                </div>
              </section>
            </Form>
          </Formik>
        </section>

        <div className="text-right">
          <Link to="/orders">
            <button type="submit" id="submit" name="submit" className="btnperson">
              Orders
            </button>
          </Link>
          <Link to="/login">
            <button type="button" id="update" name="update" className="btnperson">
              Logout
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AccountEmp;
