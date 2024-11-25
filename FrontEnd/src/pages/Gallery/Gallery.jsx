import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:3001/gallery');
      setImages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="gallery">
      <div className="title" style={{ textAlign: 'center', color: '#DCCA87' }}>
        <h1 className="maintitle">Image Gallery</h1>
        <br />
        <h3 className="simpleqt-l-one">Surprise Your Plate with</h3>
        <h3 className="simpleqt-l-two">Delightful Experience</h3>
      </div>

      <div className="image-list">
        {images.map((image) => (
          <div className="profile-img-list-item" key={image.id}>
            <a href={`/gallery/${image.id}`} className="profile-img-list-link">
              <img src={`http://localhost:3001/assets/${image.galleryimg}`} alt={image.galleryimg} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;