import React, { useState } from 'react';
import NavBarProfile from '../Header/NavBarProfile';
import './Cart.css'

const Cart = ({ addToCart }) => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    const totalPrice = calculateTotalPrice();
    // Perform actions with the total price (e.g., redirect to payment page)
    console.log('Total Price:', totalPrice);
  };

  return (
    <>
      
      <div>
        <h2>Shopping Cart</h2>
        <div>
          
            <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} className="img-cart" alt={item.name} />
                </td>
                <td>
                  <strong>{item.name}</strong>
                </td>
                <td>Rs.{item.price}.00</td>
                <td>{item.quantity}</td>
                <td>Rs.{item.price * item.quantity}.00</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="4" className="text-right">Subtotal:</td>
              <td>Rs.{calculateTotalPrice()}.00</td>
              <td></td>
            </tr>
          </tbody>
        </table>

          
        </div>
        <p>Total Price: Rs.{calculateTotalPrice()}.00</p>
      </div>
      
          <a href="/prodisplay" className="btn btn-Continue">
            <span className="Shopping"></span>&nbsp;Continue Shopping
          </a>
          <button className="payment" onClick={handleCheckout}>
            Continue To Payment<span className="payment"></span>
          </button>
        
    </>
  );
};

const App = () => {
  const [productCount, setProductCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setProductCount((prevCount) => prevCount + 1);
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div>
      <NavBarProfile productCount={productCount} />
      <Cart addToCart={addToCart} cartItems={cartItems} />
    </div>
  );
};

export default App;





