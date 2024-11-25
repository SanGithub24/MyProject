import React from 'react';
import '../filesCSS/category.css';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CatDisplay from '../displayTable/CatDisplay';

const Categories = () => {
  const initialValues = {
    category: '',
    description: '',
  };

  const onSubmit = (data, { resetForm }) => {
    axios.post('http://localhost:3001/addcat', data).then(() => {
      console.log(data);
      resetForm(); // Reset the form fields
    });
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.category) {
      errors.category = 'Please enter the category';
    }

    if (!values.description) {
      errors.description = 'Please enter a description';
    }

    return errors;
  };

  return (
    <>
      <div style={{ marginTop: '100px' }}>
        <h1 className='addcattitle'>Add Category</h1>
        <br />
        <br />

        <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validateForm}>
          <Form
            className='addcatform'
            style={{
              margin: 'auto',
              padding: '40px',
              maxWidth: '600px',
              maxHeight: '1000px',
              alignContent: 'center',
            }}
          >
            <label htmlFor='category' className='addcatlabel'>
              Add Category
            </label>
            <Field type='text' id='category' name='category' placeholder='Enter category name' />
            <ErrorMessage name='category' component='div' className='error' />

            <label htmlFor='des' className='addcatlabel'>
              Add Description
            </label>
            <Field
              type='text'
              id='description'
              name='description'
              placeholder='Enter Description'
            />
            <ErrorMessage name='description' component='div' className='error' />

            <button className='addbtn' name='addbtn' type='submit'>
              Add Category
            </button>
          </Form>
        </Formik>
      </div>

      <div>
        <CatDisplay />
      </div>
    </>
  );
};

export default Categories;
