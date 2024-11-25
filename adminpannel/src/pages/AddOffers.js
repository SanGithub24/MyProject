import React, { useState, useEffect } from 'react';
import '../filesCSS/AddOffers.css';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const AddOffers = () => {
  const [addedOffers, setAddedOffers] = useState([]);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/addoffers');
      setAddedOffers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const initialValues = {
    offerimg: null,
    description: '',
  };

  const validationSchema = Yup.object().shape({
    offerimg: Yup.mixed().required('Please choose a file'),
    description: Yup.string().required('Please enter a description'),
  });

  const onSubmit = async (data, { resetForm }) => {
    const formData = new FormData();
    formData.append('offerimg', data.offerimg);
    formData.append('description', data.description);

    try {
      await axios.post('http://localhost:3001/addoffers', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Offer added');
      fetchOffers();
      resetForm(); // Clear the form fields
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOffer = async (offerId) => {
    try {
      await axios.delete(`http://localhost:3001/addoffers/${offerId}`);
      console.log('Offer deleted');
      fetchOffers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <h1 className="addoffertitle">Add Offer</h1>
      <br />
      <br />

      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {(formikProps) => (
          <Form
            className="addofferform"
            style={{
              margin: 'auto',
              padding: '40px',
              maxWidth: '600px',
              maxHeight: '1000px',
              alignContent: 'center',
            }}
            encType="multipart/form-data" // Set enctype prop here
          >
            <label htmlFor="offerimg" className="addofferlabel">
              Upload Image
            </label>
            <input
              type="file"
              id="offerimg"
              name="offerimg"
              placeholder="Choose Image"
              onChange={(event) => {
                formikProps.setFieldValue('offerimg', event.currentTarget.files[0]);
              }}
              required // Add the required attribute
            />
            {formikProps.errors.offerimg && formikProps.touched.offerimg && (
              <div className="error">{formikProps.errors.offerimg}</div>
            )}

            <label htmlFor="des" className="addcatlabel">
              Add Description
            </label>
            <Field type="text" id="description" name="description" placeholder="Enter Description" />
            {formikProps.errors.description && formikProps.touched.description && (
              <div className="error">{formikProps.errors.description}</div>
            )}

            <button className="addbtn" id="addbtn" type="submit">
              Add Offer
            </button>
          </Form>
        )}
      </Formik>

      <div className="added-offers">
        {addedOffers.map((offer) => (
          <div className="card" key={offer.id}>
            <img
              src={`http://localhost:3001/assets/${offer.offerimg}`} alt={offer.offerimg}
              className="card-image"
            />
            <div className="card-content">
              <p className="description">{offer.description}</p>
              <button className="delete-btn" onClick={() => deleteOffer(offer.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddOffers;
