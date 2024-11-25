import React from 'react';
import axios from 'axios';
import { useParams, useHistory, Link } from 'react-router-dom';

import '../filesCSS/userdelete.css'

const EmpDelete = () => {
    const { id } = useParams();
    const history = useHistory();
  
    const handleDelete = async () => {
      try {
        await axios.delete(`http://localhost:3001/emp/${id}`);
        history.push('/accountemp');
        // Handle success or any other logic here
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div className="delete-container">
        <h2>Delete Employee</h2>
        <p>Are you sure you want to delete this Temporary ID?</p>
        <div>
          <button onClick={handleDelete}>Yes</button>
          <Link to="/accountemp">
            <button>No</button>
          </Link>
        </div>
      </div>
    );
  
}

export default EmpDelete;
