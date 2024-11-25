import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Food.css';

const Pizza = () => {
  const [pizzaProducts, setPizzaProducts] = useState([]);

  useEffect(() => {
    fetchPizzaProducts();
  }, []);

  const fetchPizzaProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/addprodetails');
      const pizzaProductsData = response.data.filter((product) => product.category === 'Pizza');
      setPizzaProducts(pizzaProductsData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="products">
      <div className="products">
        {pizzaProducts.map((product) => (
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

export default Pizza;
