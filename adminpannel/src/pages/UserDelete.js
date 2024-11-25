import React from 'react';
import axios from 'axios';
import { useParams, useHistory, Link } from 'react-router-dom';

import '../filesCSS/userdelete.css'

const UserDelete = () => {
  const { id } = useParams();
  const history = useHistory();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/adreg/${id}`);
      history.push('/users');
      // Handle success or any other logic here
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="delete-container">
      <h2>Delete User</h2>
      <p>Are you sure you want to delete this user?</p>
      <div>
        <button onClick={handleDelete}>Yes</button>
        <Link to="/users">
          <button>No</button>
        </Link>
      </div>
    </div>
  );
};

export default UserDelete;
