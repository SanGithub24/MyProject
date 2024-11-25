import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { Card, Button, Row, Col, Modal } from 'react-bootstrap';
import UserDetails from './UserDetails';
import UserEdit from './UserEdit';
import UserDelete from './UserDelete';
import EmpDelete from './EmpDelete';

import '../filesCSS/users.css';

const Users = () => {
  const [tableData, setTableData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const loadTableData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/adreg');
      setTableData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadCardData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/emp');
      setCardData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTableData();
    loadCardData();
  }, []);

  const handleTemporaryIdClick = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <Router>
        <p className="titleu">Registered Employees</p>

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
            {tableData.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td className="btndisplay">
                  <Link to={`/users/view/${item.id}`}>
                    <button className="btn btn_view">View</button>
                  </Link>
                  <Link to={`/users/edit/${item.id}`}>
                    <button className="btn btn_edit">Edit</button>
                  </Link>
                  <Link to={`/users/delete/${item.id}`}>
                    <button className="btn btn_delete">Delete</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <br />
        <br />
        <div><Link to="/accountemp"><Button type='submit'>Employee Temporary Id</Button></Link></div>
        <br />
        <br />
        <div className="card-container">
          <Row>
            {cardData.map((item) => (
              <Col key={item.id} lg={3} md={6} sm={12}>
                <Card className="user-card">
                  <Card.Img
                    variant="top"
                    src={`http://localhost:3001/assets/${item.empimg}`}
                    alt={item.empimg}
                  />
                  <Card.Body className="card-footer">
                    <Card.Title>{item.empfullname}</Card.Title>
                    <Card.Text>
                      <strong>Employee ID:</strong> {item.empid}
                    </Card.Text>
                    <Card.Text>
                      <strong>Blood Type:</strong> {item.bloodtype}
                    </Card.Text>
                    <Button variant="primary" className="btn-temporary-id" onClick={() => handleTemporaryIdClick(item)}>Temporary ID</Button>
                  </Card.Body>
                  <Card.Footer>
                    <Link to={`/accountemp/delete/${item.id}`}>
                      <Button variant="secondary" className="btn-delete">Delete</Button>
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <Switch>
          <Route path="/users/view/:id">
            <UserDetails />
          </Route>
          <Route path="/users/edit/:id">
            <UserEdit />
          </Route>
          <Route path="/users/delete/:id">
            <UserDelete />
          </Route>

          <Route path="/accountemp/delete/:id">
            <EmpDelete />
          </Route>
        </Switch>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Temporary ID Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedEmployee && (
              <div>
                <p>Employee ID: {selectedEmployee.empid}</p>
                <p>Employee Name: {selectedEmployee.empfullname}</p>
                <p>Blood Type: {selectedEmployee.bloodtype}</p>
                <img
                  src={`http://localhost:3001/assets/${selectedEmployee.empimg}`}
                  alt={selectedEmployee.empimg}
                  style={{ width: '100%', marginTop: '10px' }}
                />
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
            <Button variant="secondary" onClick={handlePrint}>Print</Button>
          </Modal.Footer>
        </Modal>
      </Router>
    </div>
  );
};

export default Users;
