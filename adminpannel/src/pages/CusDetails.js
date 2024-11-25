import React, {useState, useEffect} from 'react';
import { Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import CustomerView from './CustomerView';

import '../filesCSS/customers.css'


const CusDetails = () => {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/cusregister');
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <Router>
      <p className="titlec">Registered Customers</p>

      <Switch>
      <Route exact path="/cusdetails">
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
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <Link to={`/cusdetails/view/${item.id}`}>
                    <button className="btn btn_view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </Route>
      <Route path="/cusdetails/view/:id">
            <CustomerView />
          </Route>
      </Switch>
      </Router>
    </div>
  );
};

export default CusDetails;
