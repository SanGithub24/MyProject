import React from 'react';
import axios from 'axios';
import { useParams, useHistory, Link } from 'react-router-dom';

const Catdelete = () => {
    const { id } = useParams();
    const history = useHistory();
  
    const handleDelete = async () => {
      try {
        await axios.delete(`http://localhost:3001/addcat/${id}`);
        history.push('/categories');
        // Handle success or any other logic here
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div className="delete-container">
        <h2>Delete Category</h2>
        <p>Are you sure you want to delete this Category?</p>
        <div>
          <button onClick={handleDelete}>Yes</button>
          <Link to="/categories">
            <button>No</button>
          </Link>
        </div>
      </div>
    );
}

export default Catdelete;
