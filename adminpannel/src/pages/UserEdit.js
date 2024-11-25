import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

import '../filesCSS/useredit.css';

const UserEdit = () => {
  const { id } = useParams();
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/adreg/${id}`);
        const { name, email, password } = response.data;
        setName(name);
        setEmail(email);
        setPassword(password);
      } catch (error) {
        console.log(error);
      }
    };

    loadUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/adreg/${id}`, {
        name,
        email,
        password,
      });
      
      history.push('/users'); // Navigate to the Users form after saving changes
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="edit-container">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default UserEdit;
