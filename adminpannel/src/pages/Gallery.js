import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../filesCSS/Gallery.css';

const Gallery = () => {
  const [fileData, setFileData] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [fileError, setFileError] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      const response = await axios.get('http://localhost:3001/gallery');
      setGalleryImages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
    setFileError('');
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!fileData) {
      setFileError('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('galleryimg', fileData);

    try {
      await axios.post('http://localhost:3001/gallery', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload successful');
      fetchGalleryImages();
      setFileData(null); // Clear the fileData state
      fileInputRef.current.value = null; // Clear the input field
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteImage = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/gallery/${id}`);
      console.log('Image deleted');
      fetchGalleryImages();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="addimg">Upload Images</h1>
      <br />
      <br />
      <form
        onSubmit={onSubmitHandler}
        className="gallery-form"
        style={{
          margin: 'auto',
          padding: '40px',
          maxWidth: '600px',
          maxHeight: '1000px',
          alignContent: 'center',
        }}
      >
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef} // Assign the ref to the input field
          onChange={fileChangeHandler}
          required // Add the required attribute
        />
        {fileError && <p className="error-msg">{fileError}</p>} {/* Display error message */}
        <button type="submit" className="addbtn">
          Add Image
        </button>
      </form>

      <br />
      <br />
      <br />

      <div className="displayimg">
        {galleryImages.map((image) => (
          <div key={image.id} className="card">
            <img src={`http://localhost:3001/assets/${image.galleryimg}`} alt={image.galleryimg} />
            <br />
            <button
              className="delete-btn"
              onClick={() => deleteImage(image.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Gallery;
