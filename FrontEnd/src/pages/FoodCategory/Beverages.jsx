import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Food.css';

const Beverages = () => {
  const [beverages, setBeverages] = useState([]);

  useEffect(() => {
    fetchBeverages();
  }, []);

  const fetchBeverages = async () => {
    try {
      const response = await axios.get('http://localhost:3001/addprodetails');
      const beveragesData = response.data.filter((product) => product.category === 'Beverage');
      setBeverages(beveragesData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="products">
      <div className="products">
        {beverages.map((product) => (
          <div className="product" key={product.id}>
            <div className="imagebev">
              <img src={`http://localhost:3001/assets/${product.productimg}`} alt={product.productimg} className='bevimg' />
            </div>
            <h5 className='bevname'>{product.pname}</h5>
            <h6 className='price'>Rs.{product.price}.00</h6>
            <br/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Beverages;