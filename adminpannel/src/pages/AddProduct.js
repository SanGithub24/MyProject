import React, { useState, useEffect } from 'react';
import '../filesCSS/AddProduct.css';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ProductEdit from './ProductEdit';
import { Link,BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { categoriesData } from './categorydata';

const AddProduct = () => {
  const [addedProducts, setAddedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [editFormVisible, setEditFormVisible] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/addprodetails');
      setAddedProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3001/addcat');
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const initialValues = {
    productimg: '',
    pname: '',
    category: '',
    price: '',
    description: '',
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.productimg) {
      errors.productimg = 'Please upload an image';
    }

    if (!values.pname) {
      errors.pname = 'Please enter a product name';
    }

    if (!values.category) {
      errors.category = 'Please select a category';
    }

    if (!values.price) {
      errors.price = 'Please enter a product price';
    }

    if (!values.description) {
      errors.description = 'Please enter a description';
    }

    return errors;
  };

  const onSubmit = async (data, { resetForm }) => {
    const formData = new FormData();
    formData.append('productimg', data.productimg);
    formData.append('pname', data.pname);
    formData.append('category', data.category);
    formData.append('price', data.price);
    formData.append('description', data.description);

    if (editProductId) {
      try {
        const response = await axios.put(
          `http://localhost:3001/addprodetails/${editProductId}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        setAddedProducts(
          addedProducts.map((product) =>
            product.id === editProductId ? response.data : product
          )
        );
        setEditProductId(null);
        resetForm();
        setEditFormVisible(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.post(
          'http://localhost:3001/addprodetails',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        setAddedProducts([...addedProducts, response.data]);
        resetForm();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteProduct = (productId) => {
    axios
      .delete(`http://localhost:3001/addprodetails/${productId}`)
      .then(() => {
        setAddedProducts(addedProducts.filter((product) => product.id !== productId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editProduct = (productId) => {
    setEditProductId(productId);
    setEditFormVisible(true);
  };

  const cancelEdit = () => {
    setEditFormVisible(false);
    setEditProductId(null);
  };

  const getCategoryTitle = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.title : '';
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <h1 className="addprotitle">Add Product</h1>
      <br />
      <br />

      {!editFormVisible && (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validateForm}>
          {({ setFieldValue }) => (
            <Form
              className="addproform"
              style={{
                margin: 'auto',
                padding: '40px',
                maxWidth: '600px',
                maxHeight: '1000px',
                alignContent: 'center',
              }}
            >
              <label htmlFor="productimg" className="addprolabel">
                Upload Image
              </label>
              <input
                type="file"
                id="productimg"
                name="productimg"
                placeholder="Choose Image"
                onChange={(event) => setFieldValue('productimg', event.target.files[0])}
              />
              <ErrorMessage name="productimg" component="div" className="error-message" />

              <label htmlFor="pname" className="addprolabel">
                Product Name
              </label>
              <Field type="text" id="pname" name="pname" placeholder="Enter product name" />
              <ErrorMessage name="pname" component="div" className="error-message" />

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

              <ErrorMessage name="category" component="div" className="error-message" />

              <label htmlFor="price" className="addprolabel">
                Price
              </label>
              <Field type="text" id="price" name="price" placeholder="Enter product price" />
              <ErrorMessage name="price" component="div" className="error-message" />

              <label htmlFor="description" className="addprolabel">
                Add Description
              </label>
              <Field
                type="text"
                id="description"
                name="description"
                placeholder="Enter Description"
              />
              <ErrorMessage name="description" component="div" className="error-message" />

              <button className="addbtn" id="addbtn" type="submit">
                Add Product
              </button>
            </Form>
          )}
        </Formik>
      )}

      {editFormVisible && (
        <div>
          <ProductEdit
            initialValues={initialValues}
            onSubmit={(values) => onSubmit(values)}
            onCancel={cancelEdit}
          />
        </div>
      )}
<Router>
<Switch>
          <Route exact path="/addproduct">
      <div className="added-products">
        {addedProducts.map((product) => (
          <div key={product.id} className="cardp">
            <img
              src={`http://localhost:3001/assets/${product.productimg}`}
              alt={product.productimg}
              className="card-image"
            />
            <section>
              <p>{product.pname}</p>
              <p>Rs.{product.price}.00</p>
              <p>{product.description}</p>
              <p>{getCategoryTitle(product.category)}</p>
            </section>
            <div className="card-content">
              <div className="button-container">
                <Link to={`/addproduct/edit/${product.id}`}>
                  <button className="edit-btn" onClick={() => editProduct(product.id)}>
                    Edit
                  </button>
                </Link>

                <button className="delete-btn" onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
          
        ))}
        
      </div>
      <Route path="/addproduct/edit/:id">
            <ProductEdit />
          </Route>
      </Route>
        </Switch>
      </Router>
    </div>
    
  );
};

export default AddProduct;
