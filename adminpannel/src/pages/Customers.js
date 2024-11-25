import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../filesCSS/customers.css';

const Customers = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/cusregister');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ marginTop: '20px' }}>
      <p className="titleu">Registered Customers</p>

      <br />
      <br />

      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>ID</th>
            <th style={{ textAlign: 'center' }}>Name</th>
            <th style={{ textAlign: 'center' }}>Email Address</th>
            <th style={{ textAlign: 'center' }}>Password</th>
            <th style={{ textAlign: 'center' }}>Action</th>
          </tr>
        </thead>

<tbody>
  {Array.isArray(data) ? (
    data.map((item, index) => (
      <tr key={item.id}>
        <th scope="row">{index + 1}</th>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td className="btndisplay">
          <Link to={`/view/${item.id}`}>
            <button className="btn btn_view">View</button>
          </Link>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5">No data available</td>
    </tr>
  )}
</tbody>

      </table>
    </div>
  );
};

export default Customers;
