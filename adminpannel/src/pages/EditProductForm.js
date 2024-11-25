import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../filesCSS/editproduct.css';
import { categoriesData } from './categorydata';

const EditProductForm = ({ initialValues, onSubmit, onCancel }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const history = useHistory();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append('productimg', selectedFile);
    formData.append('pname', values.pname);
    formData.append('category', values.category);
    formData.append('price', values.price);
    formData.append('description', values.description);

    try {
      await axios.put(`http://localhost:3001/addprodetails/${initialValues.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onSubmit(); // Call the onSubmit function passed from the parent component
      history.push('/addproduct');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form
        className="editproform"
        style={{
          margin: 'auto',
          padding: '40px',
          maxWidth: '600px',
          maxHeight: '1000px',
          alignContent: 'center',
        }}
      >
        <h2 className="editprotitle">Edit Product</h2>

        <label htmlFor="productimg" className="editprolabel">
          Upload Image
        </label>
        <input type="file" id="productimg" name="productimg" onChange={handleFileChange} />

        <label htmlFor="pname" className="editprolabel">
          Product Name
        </label>
        <Field type="text" id="pname" name="pname" placeholder="Enter product name" />

        <label htmlFor="category" className="addprolabel">
          Category
        </label>
        <Field
          as="select"
          className="w-full mt-2 border h-[35px] rounded-[5px]"
          id="category"
          name="category"
        >
          <option value="">Choose a category</option>
          {categoriesData.map((category) => (
            <option value={category.title} key={category.title}>
              {category.title}
            </option>
          ))}
        </Field>

        <label htmlFor="price" className="editprolabel">
          Price
        </label>
        <Field type="text" id="price" name="price" placeholder="Enter product price" />

        <label htmlFor="description" className="editprolabel">
          Add Description
        </label>
        <Field type="text" id="description" name="description" placeholder="Enter Description" />

        <div className="edit-buttons-container">
          <button type="submit" className="save-btn">
            Save
          </button>
          <button type="button" className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default EditProductForm;
