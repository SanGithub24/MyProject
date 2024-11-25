import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

import '../filesCSS/editproduct.css';
import { Field, Form, Formik } from 'formik';

import { categoriesData } from './categorydata';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ProdcutEdit = () => {
  const { id } = useParams();
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState(null);
  const [pname, setPName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/addprodetails/${id}`);
        const {selectedFile, pname, category, price, description } = response.data;
        setSelectedFile(selectedFile);
        setPName(pname);
        setCategory(category);
        setPrice(price);
        setDescription(description);
      } catch (error) {
        console.log(error);
      }
    };

    loadUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/addprodetails/${id}`, {
        selectedFile,
        pname,
        category,
        price,
        description,
      });
      
      history.push('/addproduct'); // Navigate to the Users form after saving changes
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="editprotitle">Edit Product</h2>
      <Formik initialValues={{}} onSubmit={handleSubmit}>
      <Form 
      className="editproform"
      style={{
        margin: 'auto',
        padding: '40px',
        maxWidth: '600px',
        maxHeight: '1000px',
        alignContent: 'center',
      }}>
      
        <div>
          <label htmlFor="productimg" className="editprolabel">Upload Image:</label>
          <input type="file" id="productimg" name="productimg" onChange={(e) => setSelectedFile(e.target.value)} value={selectedFile} />
        </div>
        <div>
          <label htmlFor="pname" className="editprolabel">Product Name:</label>
          <input type="text" id="pname" name="pname" placeholder="Enter product name"  onChange={(e) => setPName(e.target.value)} value={pname} />
        </div>
        <div>
          <label htmlFor="category" className="addprolabel">Category:</label>
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
        </div>
        <div>
          <label htmlFor="price" className="editprolabel">Price:</label>
          <input type="text" id="price" name="price" placeholder="Enter product price" onChange={(e) => setPrice(e.target.value)} value={price} />
        </div>
        <div>
          <label htmlFor="description" className="editprolabel">Add Description:</label>
          <input type="text" id="description" name="description" placeholder="Enter Description" onChange={(e) => setDescription(e.target.value)} value={description} />
        </div>
        <div className="edit-buttons-container">
          <button type="submit" className="save-btn">
            Save
          </button>
          <Link to="/addproduct"></Link>
          <button type="button" className="cancel-btn">
            Cancel
          </button>
        </div>
        </Form>
        </Formik>
    </div>
  );
};

export default ProdcutEdit;