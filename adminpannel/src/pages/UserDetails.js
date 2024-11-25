import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


import '../filesCSS/userdetails.css'

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/adreg/${id}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="user-details-container">
      {user ? (
        <div>
          <h2>User Details</h2>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Render additional user details */}

          <Link to="/users">
          <button>Go Back</button>
        </Link>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserDetails;
